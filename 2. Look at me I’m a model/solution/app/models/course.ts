import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Member from './member.js'
import slugify from '@sindresorhus/slugify';
import useFullTextSearch from '../hooks/useFullTextSearch.js'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare departmentId: number

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @manyToMany(() => Member, {
    relatedKey: 'index',
    pivotTable: 'member_courses'
  })
  declare members: ManyToMany<typeof Member>

  @beforeSave()
  static async slugifyUrl(course: Course) {
    course.url = `https://solvro.pl/blog/${slugify(course.name, { lowercase: true })}`
  }

  static search = useFullTextSearch<typeof Course>(this, ['name', 'description', 'url'])

  @column()
  declare description: string | null

  @column()
  declare url: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}