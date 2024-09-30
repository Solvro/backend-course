import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare index: string

  @column()
  declare first_name: string

  @column()
  declare last_name: string

  @column()
  declare status: 'inactive' | 'active' | 'honourable' | 'participative'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}