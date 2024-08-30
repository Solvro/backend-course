import {DateTime} from 'luxon'
import {BaseModel, belongsTo, column, manyToMany} from '@adonisjs/lucid/orm'
import Department from "#models/department";
import type {BelongsTo, ManyToMany} from "@adonisjs/lucid/types/relations";
import Member from "#models/member";

export default class Course extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare name: string

  @column()
  declare resourceUrl: string

  @column()
  declare description: string

  @column()
  declare departmentId: number

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @manyToMany(() => Member, {
    relatedKey: 'index',
    pivotTable: 'member_courses',
  })
  declare members: ManyToMany<typeof Member>

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime
}