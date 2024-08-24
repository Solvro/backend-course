import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Course from './course.js'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import SolvroMember from './solvro_member.js'

export default class Section extends BaseModel {
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

  @manyToMany(() => SolvroMember, {
    pivotTable: 'member_sections',
    pivotColumns: ['joined_at', 'left_at'],
    relatedKey: 'index',
    pivotRelatedForeignKey: 'member_index',
  })
  declare members: ManyToMany<typeof SolvroMember>
}
