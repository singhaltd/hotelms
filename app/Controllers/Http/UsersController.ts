import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MUser from 'App/Models/MUser'

export default class UsersController {
    public async index({ view }: HttpContextContract) {
        const rsUsers = await MUser.all()
        return view.render('users/show', {
            rsUsers
        })
    }
}
