import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import MRoom from './MRoom'

export default class MRoomType extends BaseModel {
  public static table = "room_type"
  @column({ isPrimary: true,columnName:'rid' })
  public rtid: number
  @column({columnName:'room_name'})
  public title:string

  @belongsTo(() => MRoom)
  public user: BelongsTo<typeof MRoom>
}
