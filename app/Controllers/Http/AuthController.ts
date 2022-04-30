import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MUser from 'App/Models/MUser'

export default class AuthController {
    public async login({ view, auth, response }: HttpContextContract) {
        if (await auth.check()) {
            response.redirect('/')
        }
        return view.render('login')
    }
    public async register({ view }) {
        return view.render('register')
    }

    public async CreateLogin({ request, auth, session, response }) {
        const body = schema.create({
            username: schema.string(),
            password: schema.string()
        })

        const payload = await request.validate({ schema: body })
        try {
            await auth.use('api').attempt(payload.username, payload.password)
            session.flash({ notification: "Login" });
            response.redirect('/')
        } catch (e) {
            session.flash({ notification: "Not Login" });
            return response.badRequest(e)
        }
    }

    public async CreateRegister({ request, session, response }) {
        const body = schema.create({
            username: schema.string(),
            email: schema.string(),
            password: schema.string()
        })

        const payload = await request.validate({ schema: body })
        try {
            await MUser.create(payload)
            session.flash({ notification: "User created successfully" });
            return response.redirect("/");
        } catch (e) {
            return response.badRequest(e)
        }
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.logout()
        return response.status(200)
    }
}
