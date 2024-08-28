import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Course from './course.js';
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations';
import Member from './member.js';

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name:string;

  @hasMany(() => Course)
  declare courses: HasMany<typeof Course>

  @manyToMany(() => Member, {
    relatedKey: "index",
    pivotTable: 'member_departments',
    pivotTimestamps: {
      createdAt: 'created_at',
      updatedAt: false
    }
  })
  declare members: ManyToMany<typeof Member>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}