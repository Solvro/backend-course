import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class SolvroMember extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare name: string

  @column({})
  declare surname: string

  @column({})
  declare index: string

  @column({})
  declare biography: string | null

  @column({})
  declare status: 'active' | 'inactive' | 'new' | 'honorary'

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}