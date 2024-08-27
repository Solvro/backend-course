import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Course from './course.js'
import Member from './member.js'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Course)
  declare courses: relations.HasMany<typeof Course>

  @manyToMany(() => Member, {
    pivotTable: 'members_departments',
    pivotForeignKey: 'department_id',
    pivotRelatedForeignKey: 'member_index',
  })
  declare members: relations.ManyToMany<typeof Member>
}
