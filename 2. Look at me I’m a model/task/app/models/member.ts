import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Member extends BaseModel {
  @column({ isPrimary: true, columnName: 'member_id' })
  declare id: number

  @column({ columnName: 'first_name' })
  declare firstName: String

  @column({ columnName: 'last_name' })
  declare lastName: String

  @column({ columnName: 'status' })
  declare status: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
