import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Department from '#models/department'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Member from './member.js'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare departmentId: number

  @belongsTo(() => Department)
  declare department: BelongsTo<typeof Department>

  @manyToMany(() => Member, {
    pivotColumns: ['grade'],
    pivotTable: 'course_members',
    relatedKey: 'id',
  })
  declare members: ManyToMany<typeof Member>

  @column()
  declare name: string

  @column()
  declare url: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
