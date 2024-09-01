import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  public index: number

  @column()
  public name: string

  @column()
  public surname: string

  @column()
  public interests: string

  @column()
  public status: string

  @column()
  public department: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}