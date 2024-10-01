import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
}