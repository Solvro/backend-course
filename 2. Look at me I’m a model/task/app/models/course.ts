import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Member from './member.js'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
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

  @column()
  declare link: string

  @column()
  declare description: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  public static async generateUrl(course: Course) {
    if (course.$dirty.name) {  
      const formattedName = course.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      course.link = `https://solvro.pl/blog/${formattedName}`
    }
  }
}