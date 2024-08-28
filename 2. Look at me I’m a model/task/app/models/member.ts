import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Field from './field.js'
import Course from './course.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare surname: string

  @column()
  declare status: 'active' | 'inactive' | 'honor' | 'begineer'

  @manyToMany(() => Course, {
    localKey: 'id',
    pivotForeignKey: 'member_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'course_id',
    pivotTable: 'members_courses',
    pivotColumns: ['started_at', 'ended_at', 'grade'],
    pivotTimestamps: true,
  })
  declare courses: ManyToMany<typeof Course>

  @manyToMany(() => Field, {
    localKey: 'id',
    pivotForeignKey: 'member_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'field_id',
    pivotTable: 'members_fields',
    pivotTimestamps: true,
  })
  declare fields: ManyToMany<typeof Field>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
