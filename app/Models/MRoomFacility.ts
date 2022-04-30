
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MRoomFacility extends BaseModel {
  public static table = "room_facility"
  @column({ isPrimary: true,columnName:'rfid'})
  public id: number
  @column()
  public title:string
  @column()
  public icon:string
  @column()
  public remark:string
}
