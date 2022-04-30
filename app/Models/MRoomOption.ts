import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MRoomOption extends BaseModel {
  public static table = 'room_option'
  @column({ isPrimary: true, columnName: 'ref' })
  public id: number
  @column({ columnName: 'room_type_id' })
  public room_type: string
  @column({ columnName: 'description' })
  public description: string
  @column({ columnName: 'cate' })
  public cate: string
  @column({ columnName: 'opvalue' })
  public opvalue: string
}
