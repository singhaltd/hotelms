// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MProvince extends BaseModel {
  public static table = "provinces"
  @column({ isPrimary: true,columnName:'pv_id' })
  public id: number
  @column({columnName:'pvname'})
  public name:string
  @column({columnName:'country_id'})
  public country:string
  
}
