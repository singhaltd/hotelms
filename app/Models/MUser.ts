import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class MUser extends BaseModel {
  public static table = "users"
  @column({ isPrimary: true, columnName: 'id' })
  public id: number
  @column()
  public username: string
  @column()
  public email: string
  @column()
  public password: string
  @column({ columnName: 'fname' })
  public firstname: string
  @column({ columnName: 'lname' })
  public lastname: string
  @column({ columnName: 'mobile' })
  public mobile: string
  @column({ columnName: 'role' })
  public role: string
  @column({ columnName: 'dob' })
  public dob: Date

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: MUser) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
