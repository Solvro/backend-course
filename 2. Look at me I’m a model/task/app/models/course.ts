import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import MemberCourse from './member_course.js'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @hasMany(() => MemberCourse)
  declare memberCourses: HasMany<typeof MemberCourse>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
