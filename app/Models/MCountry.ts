import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class MCountry extends BaseModel {
  public static table = "country"
  @column({ isPrimary: true,columnName:'cid' })
  public cid: number
  @column({columnName:'cname'})
  public name:string

}
