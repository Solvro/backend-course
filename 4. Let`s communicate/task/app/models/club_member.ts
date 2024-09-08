import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ClubMember extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'Active' | 'Inactive' | 'Trainee' | 'Honorary'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}