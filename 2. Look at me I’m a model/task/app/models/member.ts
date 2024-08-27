import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Course from './course.js'
import { ManyToMany } from '@adonisjs/lucid/types/relations'
import Department from './department.js'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare index: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Course, {
    pivotTable: 'members_courses',
    pivotForeignKey: 'member_index',
    pivotRelatedForeignKey: 'course_id',
  })
  declare courses: ManyToMany<typeof Course>

  @manyToMany(() => Department, {
    pivotTable: 'members_deparments',
    pivotForeignKey: 'member_index',
    pivotRelatedForeignKey: 'department_id',
  })
  declare departments: ManyToMany<typeof Department>
}
