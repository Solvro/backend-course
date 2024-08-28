import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Department from './department.js'
import Course from './course.js'
import { compareValues } from '@adonisjs/lucid/utils'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName:string

  @column()
  declare lastName:string


  @manyToMany(() => Department, {
    relatedKey: 'id',
    pivotTable: 'member_departments'
  })
  declare departments: ManyToMany<typeof Department>

  @manyToMany(() => Course, {
    relatedKey: 'id',
    pivotTable: 'member_courses',
    pivotColumns: [
      'id',
      'started_date',
      'ended_date',
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