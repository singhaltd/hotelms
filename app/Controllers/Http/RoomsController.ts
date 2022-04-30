// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import MRoom from "App/Models/MRoom"
import MRoomFacility from "App/Models/MRoomFacility"
import MRoomOption from "App/Models/MRoomOption"
import MRoomType from "App/Models/MRoomType"

export default class RoomsController {

    // client 
    public async roomDetail({ view }) {
        return view.render('room/room_page')
    }

    public async index({ view, auth }) {
        await auth.authenticate()
        const rsRoom = await MRoom.query().preload('roomType')
        return view.render('room/show', {
            rsRoom
        })
    }
    public async roomType({ view }) {
        const rsRoomType = await MRoomType.all()
        return view.render('room/type', {
            rsRoomType
        })
    }

    public async roomFacility({ view }) {
        const rsFacility = await MRoomFacility.all()
        return view.render('room/facility', {
            rsFacility
        })
    }
    public async roomGrid({ view }) {
        // const rsFacility = await MRoomFacility.all()
        return view.render('room/grid', {
            // rsFacility
        })
    }


    public async store({ request, response }) {
        const { strfrom, strto, roomtype, price } = request.all()
        let bodyCreate = []
        for (let i = parseInt(strfrom); i <= parseInt(strto); i++) {
            bodyCreate.push({
                id: i.toString().padStart(3, '0'),
                room_num: i.toString().padStart(3, '0'),
                price: price,
                rtype: roomtype,
                status: 'O'
            })
        }
        const rs = await MRoom.createMany(bodyCreate)
        return response.json(rs)
    }

    public async delRoom({ params, response }) {
        const rsroom = await MRoom.find(params.id)
        rsroom.delete()
    }

    public async CreatType({ request, response }) {

    }
    public async roomTypeOption({ params, response }) {
        const rsRoomType = await MRoomOption.query().where('room_type', params.id)
        return response.json(rsRoomType)
    }

    public async RemoveOption({ params }) {
        const rsRoomType = await MRoomOption.find(params.id)
        rsRoomType?.delete()

        return true;
    }
    public async CreateTypeOption({ request, response }) {
        const { title, description, type } = request.all()
        const rsRoomType = await MRoomOption.create({
            room_type: type,
            description: title,
            cate: 'service',
            opvalue: description
        })
        return response.json(rsRoomType)
    }
    public async CreatFacility({ request, response }) {
        const { title, icon, remark } = request.all()
        const rs = await MRoomFacility.create({
            title,
            icon,
            remark
        })

        return response.json(rs)
    }




    public async apIndex({ request, response }) {
        const rsRoom = await MRoom.query().preload('roomType')
        return response.json(rsRoom)
    }
}
