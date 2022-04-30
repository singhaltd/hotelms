import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Mbooking from 'App/Models/Mbooking'

export default class MCustomer extends BaseModel {
  public static table = "customer"
  @column({ isPrimary: true,columnName:'cid' })
  public cid: number
  @column({columnName:'fname'})
  public fname:string
  @column({columnName:'lname'})
  public lname:string
  @column()
  public email:string
  @column({columnName:'mobile'})
  public phone:string
  @column()
  public dob:Date
  @column({columnName:'distict_id'})
  public district:number
  @column({columnName:'village'})
  public village:string
  @column()
  public doc_type:string
  @column()
  public doc_no:string
  @column()
  public sex:string
  @column()
  public status:string

  @belongsTo(() => Mbooking)
  public booking: BelongsTo<typeof Mbooking>
}
