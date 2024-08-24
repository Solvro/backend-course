import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Course from './course.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Member from './member.js'
// table.increments('id')

// table.integer('member_index').references('members.index').onDelete('CASCADE')
// table.integer('course_id').references('courses.id').onDelete('CASCADE')

// table.integer('grade', 2).nullable()

// table.date('started_date')
// table.date('ended_date').nullable()

// table.timestamp('created_at').defaultTo('NOW()')
// table.timestamp('updated_at')
export default class MemberCourse extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare courseId: number

  @column()
  declare memberIndex: number

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>

  @belongsTo(() => Member, {
    foreignKey: 'memberIndex',
    localKey: 'index',
  })
  declare member: BelongsTo<typeof Member>

  @column()
  declare grade: number

  @column.dateTime()
  declare startedDate: DateTime

  @column.dateTime()
  declare endedDate: DateTime
}
