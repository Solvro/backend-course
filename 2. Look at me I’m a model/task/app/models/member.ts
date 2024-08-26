import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Course from './course.js'
import Department from './department.js'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare name: string
  
  @column()
  declare surname: string

  @column()
  declare status: 'ACTIVE' | 'NOT_ACTIVE' | 'NEW' | 'HONORED'

  @manyToMany(() => Department, {
    relatedKey: 'id',
    pivotTable: 'member_departments'
  })
  declare departments: ManyToMany<typeof Department>

  @manyToMany(() => Course, {
    relatedKey: 'id',
    pivotTable: 'member_courses',
    pivotColumns: [
      'index',
      'starting_date',
      'ending_date',
      'grade'
    ],
    pivotTimestamps: true
  })
  declare courses: ManyToMany<typeof Course>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}