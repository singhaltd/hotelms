import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

export default class MediaController {
    public async fileUpdate({ request }: HttpContextContract) {
        const { files } = request.all()
        const images = files
        for (let image of images) {
            await image.move(Application.tmpPath('uploads'))
        }
    }
}
