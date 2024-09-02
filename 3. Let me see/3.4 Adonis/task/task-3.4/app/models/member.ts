import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare name: string
  
  @column()
  declare surname: string

  @column()
  declare status: 'ACTIVE' | 'NOT_ACTIVE' | 'NEW' | 'HONORED'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}