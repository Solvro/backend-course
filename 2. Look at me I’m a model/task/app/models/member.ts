import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Course from './course.js'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @manyToMany(() => Department, {
    pivotTable: 'member_departments',
    relatedKey: 'id',
  })
  declare departments: ManyToMany<typeof Department>

  @manyToMany(() => Course, {
    pivotColumns: ['grade'],
    pivotTable: 'course_members',
    relatedKey: 'id',
  })
  declare courses: ManyToMany<typeof Course>

  @column({ columnName: 'first_name' })
  declare firstName: String

  @column({ columnName: 'last_name' })
  declare lastName: String

  @column({ columnName: 'status' })
  declare status: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
