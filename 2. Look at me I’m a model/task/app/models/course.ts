import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import Department from './department.js'
import * as relations from '@adonisjs/lucid/types/relations'
import Member from './member.js'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare departmentId: number

  @column()
  declare description: string | null

  // exercise 4
  @computed()
  get linkGenerated(): string {
    return `https://solvro/blog/${this.slugify(this.name)}`
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Department)
  declare department: relations.BelongsTo<typeof Department>

  @manyToMany(() => Member, {
    pivotTable: 'members_courses',
    pivotForeignKey: 'course_id',
    pivotRelatedForeignKey: 'member_index',
  })
  declare members: relations.ManyToMany<typeof Member>

  private slugify(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
}
