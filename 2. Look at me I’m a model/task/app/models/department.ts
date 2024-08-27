import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Course from './course.js'
import ClubMember from './club_member.js'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'

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
  declare courses: HasMany<typeof Course>
  
  @manyToMany(() => ClubMember, {
    relatedKey: 'index',
    pivotForeignKey: 'department_id',
    pivotRelatedForeignKey: 'member_id',
    pivotTable: 'department_members',
    pivotTimestamps: true
  })
  declare club_members: ManyToMany<typeof ClubMember>
}