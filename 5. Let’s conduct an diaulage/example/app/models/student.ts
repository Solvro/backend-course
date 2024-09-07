import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string;

  @column()
  declare lastName: string;

  @column()
  declare profilePhoto: string;

  static accessTokens = DbAccessTokensProvider.forModel(Student)

  @column.date()
  declare dateOfBirth: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}