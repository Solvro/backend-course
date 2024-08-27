import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Department from './department.js'

export default class MemberDepartment extends BaseModel {
  @column()
  declare memberIndex: string

  @column()
  declare departmentId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @belongsTo(() => Department)
  declare department: relations.BelongsTo<typeof Department>
}
