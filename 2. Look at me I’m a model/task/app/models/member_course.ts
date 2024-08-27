import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Course from './course.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>
}
