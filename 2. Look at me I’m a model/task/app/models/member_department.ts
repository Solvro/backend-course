import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MemberDepartment extends BaseModel {
  @column()
  declare memberIndex: string

  @column()
  declare departmentId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
