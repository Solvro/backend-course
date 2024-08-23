import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MemberSection extends BaseModel {
  @column({ isPrimary: true })
  declare memberIndex: number

  @column({ isPrimary: true })
  declare sectionId: number

  @column.date()
  declare joinedAt: DateTime

  @column.date()
  declare leftAT: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
