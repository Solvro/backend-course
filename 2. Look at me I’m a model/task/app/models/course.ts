import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Student from '#models/student'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Specialization from '#models/specialization'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare specialization: string

  @column()
  declare description: string | null

  @column()
  declare link: string | null

  @belongsTo(() => Specialization, {
    foreignKey: 'name',
  })
  declare spec: BelongsTo<typeof Specialization>

  @manyToMany(() => Student, {
    pivotTable: 'student_courses',
    relatedKey: 'index',
    pivotRelatedForeignKey: 'student_index',
    pivotColumns: ['id', 'start_date', 'end_date', 'grade'],
    pivotTimestamps: true,
  })
  declare students: ManyToMany<typeof Student>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
