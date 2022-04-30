// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import MDistrict from "App/Models/MDistrict";
import MProvince from "App/Models/MProvince";

export default class CitiesController {
    public async country() {

    }
    public async province({ params, response }) {
        const rsProv = await MProvince.query().where('country', params.id)
        return response.json(rsProv)
    }
    public async district({ params, response }) {
        const rsDist = await MDistrict.query().where('province', params.id)
        return response.json(rsDist)
    }
}
