import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Course from './course.js'
import Member from './member.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class MemberCourse extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare member_index: number

  @column()
  declare course_id: number

  @column()
  declare grade: number | null

  @column()
  declare started_at: Date

  @column()
  declare ended_at: Date | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @belongsTo(() => Member)
  declare member: BelongsTo<typeof Member>

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>
}
