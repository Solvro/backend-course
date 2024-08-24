import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Section from './section.js'
import SolvroMember from './solvro_member.js'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare resourceLink: string

  @column()
  declare dynamicUrl: string

  @column()
  declare sectionId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Section)
  declare section: BelongsTo<typeof Section>

  @manyToMany(() => SolvroMember, {
    pivotTable: 'member_courses',
    pivotColumns: ['start_date', 'end_date', 'grade'],
    relatedKey: 'index',
    pivotRelatedForeignKey: 'member_index',
  })
  declare members: ManyToMany<typeof SolvroMember>
}
