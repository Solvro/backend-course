import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Course from './course.js'

export default class ClubMember extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'Active' | 'Inactive' | 'Trainee' | 'Honorary'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @manyToMany(() => Department, {
    relatedKey: 'id',
    pivotForeignKey: 'member_id',
    pivotRelatedForeignKey: 'department_id',
    pivotTable: 'department_members',
    pivotTimestamps: true
  })
  declare departments: ManyToMany<typeof Department>

  @manyToMany(() => Course, {
    relatedKey: 'id',
    pivotForeignKey: 'member_id',
    pivotRelatedForeignKey: 'course_id',
    pivotTable: 'course_members',
    pivotColumns: ['id', 'start_date', 'end_date', 'grade'],
    pivotTimestamps: true
  })
  declare courses: ManyToMany<typeof Course>
}