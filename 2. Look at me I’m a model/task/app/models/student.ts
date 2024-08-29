import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Course from '#models/course'
import Specialization from '#models/specialization'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'IMPLEMENTATION' | 'ACTIVE' | 'ALUMNI' | 'INACTIVE'

  @manyToMany(() => Specialization, {
    pivotTable: 'student_specializations',
    localKey: 'index',
    pivotForeignKey: 'student_index',
    relatedKey: 'name',
    pivotRelatedForeignKey: 'specialization',
    pivotColumns: ['id'],
  })
  declare specializations: ManyToMany<typeof Specialization>

  @manyToMany(() => Course, {
    pivotTable: 'student_courses',
    localKey: 'index',
    pivotForeignKey: 'student_index',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'course_id',
    pivotColumns: ['id', 'start_date', 'end_date', 'grade'],
    pivotTimestamps: true,
  })
  declare courses: ManyToMany<typeof Course>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
