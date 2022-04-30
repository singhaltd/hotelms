// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckinsController {
    public async index({view}){
        return view.render('checkin/checkin')
    }
}
