import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Student from './student.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class StudentCourse extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare student_id: number

  @column()
  declare course_id: number

  @column()
  declare grade: number

  @column.dateTime()
  declare start_date: DateTime

  @column.dateTime()
  declare end_date: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Student, {
    foreignKey: 'student_id',
    localKey: 'index',
  })
  declare student: BelongsTo<typeof Student>
  
}