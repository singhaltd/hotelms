import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MFile extends BaseModel {
  public static table = "files"
  @column({ isPrimary: true, columnName: 'fid' })
  public id: number
  @column({ columnName: 'ftitle' })
  public title: string
  @column()
  public ext: string
  @column()
  public size: number
  @column()
  public width: number
  @column()
  public height: number
  @column()
  public alt: string
  @column()
  public path: string
}
