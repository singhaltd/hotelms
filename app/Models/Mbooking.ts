import { BaseModel, beforeSave, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MCustomer from 'App/Models/MCustomer'

export default class Mbooking extends BaseModel {
  public static table = "booking"
  @column({ isPrimary: true, columnName: 'ref_id' })
  public id: string
  @column({ columnName: 'adulth' })
  public adult: number
  @column({ columnName: 'child' })
  public children: number
  @column({ columnName: 'room_type' })
  public room_type: string
  @column({ columnName: 'check_in_date' })
  public check_in_date: Date
  @column({ columnName: 'check_out_date' })
  public check_out_date: Date
  @column()
  public check_in_time: string
  @column()
  public check_out_time: string
  @column({ columnName: 'stat' })
  public stat: string
  @column()
  public booktype:string
  @column({ columnName: 'rqty' })
  public rqty: number
  @column({columnName:'cust_id'})
  public customer:number
  @column({columnName:'trn_date'})
  public trndate:string


  @hasOne(() => MCustomer, {
    localKey: 'customer',
    foreignKey: 'cid' // defaults to id
  })
  public cust: HasOne<typeof MCustomer>


  @beforeSave()
  public static async hashPassword(mb: Mbooking) {
    if (mb.$dirty.trndate) {
      mb.trndate = new Date().toJSON().slice(0,10)
    }
  }
}
