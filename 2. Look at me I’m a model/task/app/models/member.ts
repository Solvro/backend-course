import {DateTime} from 'luxon'
import {BaseModel, column, manyToMany} from '@adonisjs/lucid/orm'
import Department from "#models/department";
import type {ManyToMany} from "@adonisjs/lucid/types/relations";
import Course from "#models/course";

export default class Member extends BaseModel {
  @column({isPrimary: true})
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'onboarding' | 'active' | 'honorary' | 'inactive'

  @column()
  declare interests: string | null

  @manyToMany(() => Department, {
    relatedKey: 'id',
    pivotTable: 'department_members',
  })
  declare departments: ManyToMany<typeof Department>

  @manyToMany(() => Course, {
    relatedKey: 'id',
    pivotTable: 'member_courses',
    pivotColumns: [
      'id',
      'start_date',
      'end_date',
      'grade'
    ],
    pivotTimestamps: true
  })
  declare courses: ManyToMany<typeof Course>

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime
}