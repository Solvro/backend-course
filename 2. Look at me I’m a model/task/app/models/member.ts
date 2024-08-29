import {DateTime} from 'luxon'
import {BaseModel, column} from '@adonisjs/lucid/orm'

export default class Member extends BaseModel {
  @column({isPrimary: true})
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'onboarding' | 'active' | 'honorary' | 'inactive'

  @column()
  declare interests: string | null

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime
}