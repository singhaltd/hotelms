// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Mbooking from 'App/Models/Mbooking'

import MCountry from "App/Models/MCountry"
import MCustomer from 'App/Models/MCustomer'

export default class BookingsController {
    public async booking({ view }) {
        const rsBook = await Mbooking.query().preload('cust')
        return view.render('booking/book', {
            rsBook
        })
    }
    public async creatBooking({ view }) {
        const rsCountry = await MCountry.all()
        return view.render('booking/create', {
            rsCountry
        })
    }


    public async CreateBooking({ request, response }) {
        const CustomerBody = schema.create({
            fname: schema.string(),
            lname: schema.string(),
            mobile: schema.string(),
            village: schema.string(),
            sex: schema.string()
        })
        const BookBody = schema.create({
            id: schema.string(),
            // district: schema.string()
            adulth: schema.string(),
            children: schema.string(),
            booktype: schema.string(),
            // room_type: schema.string(),
            check_in_date: schema.string(),
            check_in_time: schema.string(),
            check_out_date: schema.string(),
            check_out_time: schema.string(),
            rqty: schema.string()
        })
        //booktype:request.input('booktype')
        const payloadCust = await request.validate({ schema: CustomerBody })
        const payloadBook = await request.validate({ schema: BookBody })
        const paybody = Object.assign(payloadCust, { dob: request.input('dob'), doc_type: request.input('doc_type'), doc_no: request.input('doc_no'), status: 'O' })

        // console.log(payloadBook)
        try {
            const rs = await MCustomer.updateOrCreate(paybody, paybody)

            if (rs) {
                const paybook = Object.assign(payloadBook, { stat: 'B', customer: rs['$original'].cid })
                const brs = await Mbooking.create(paybook)
            }
            // return true


            return response.json(rs)
        } catch (e) {
            console.log(e)
        }

    }
}
