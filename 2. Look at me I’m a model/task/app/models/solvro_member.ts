import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Course from './course.js'
import Section from './section.js'

export default class SolvroMember extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Course, {
    pivotTable: 'member_courses',
    pivotColumns: ['start_date', 'end_date', 'grade'],
    localKey: 'index',
    pivotForeignKey: 'member_index',
  })
  declare courses: ManyToMany<typeof Course>

  @manyToMany(() => Section, {
    pivotTable: 'member_sections',
    pivotColumns: ['joined_at', 'left_at'],
    localKey: 'index',
    pivotForeignKey: 'member_index',
  })
  declare sections: ManyToMany<typeof Section>
}
