import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import StudentCourse from './student_course.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Student extends BaseModel {
  
  @column({ isPrimary: true })
  declare index: string

  @column()
  declare first_name: string

  @column()
  declare last_name: string

  @column()
  declare status: 'inactive' | 'active' | 'honourable' | 'participative'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => StudentCourse)
  declare studentCourse: HasMany<typeof StudentCourse>

}