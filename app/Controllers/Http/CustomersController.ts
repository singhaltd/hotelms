// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import MCustomer from "App/Models/MCustomer";

export default class CustomersController {
    public async index({ request, response }) {
        const rs = await MCustomer.all()
        return response.json(rs)
    }

    public async findCustomer({ params, response }) {
        const rs = await MCustomer.query()
            .where('fname', 'like', '%' + params.q + '%')
            .orWhere('lname', 'like', '%' + params.q + '%')

        return response.json(rs)
    }
}
