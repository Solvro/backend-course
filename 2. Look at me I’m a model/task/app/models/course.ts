import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import ClubMember from './club_member.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Department from './department.js'
import slugify from '@sindresorhus/slugify'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare departmentId: number

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @column()
  declare urlLink: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => ClubMember, {
    relatedKey: 'index',
    pivotForeignKey: 'course_id',
    pivotRelatedForeignKey: 'member_id',
    pivotTable: 'course_members',
    pivotColumns: ['id', 'start_date', 'end_date', 'grade'],
    pivotTimestamps: true
  })
  declare club_members: ManyToMany<typeof ClubMember>

  @beforeSave()
  public static async generateUrl(course : Course) {
    course.urlLink = `https://solvro.pl/blog/${slugify(course.name)}`
  }
}