// import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MRoomType from './MRoomType'

export default class MRoom extends BaseModel {
  public static table ="room"
  @column({ isPrimary: true ,columnName:"rid"})
  public id: number
  @column({columnName:'rname'})
  public room_num:string
  @column({columnName:'price'})
  public price:number
  @column({columnName:'status'})
  public status:string
  @column({columnName:'room_type'})
  public rtype:string
  @column()
  public building:string
  @column()
  public floor:string

  @hasOne(() => MRoomType, {
    localKey: 'rtype',
    foreignKey: 'rtid' // defaults to id
  })
  public roomType: HasOne<typeof MRoomType>
}
