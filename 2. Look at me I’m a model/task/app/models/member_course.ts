import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MemberCourse extends BaseModel {
  @column()
  declare memberIndex: string

  @column()
  declare course_id: number

  @column.dateTime({ autoCreate: true })
  declare joinedDate: DateTime

  @column.dateTime()
  declare endedDate: DateTime | null

  @column()
  declare grade: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
