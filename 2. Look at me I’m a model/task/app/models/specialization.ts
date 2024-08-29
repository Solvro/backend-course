import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Student from '#models/student'
import Course from '#models/course'

export default class Specialization extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasMany(() => Course, {
    localKey: 'name',
    foreignKey: 'specialization',
  })
  declare courses: HasMany<typeof Course>

  @manyToMany(() => Student, {
    pivotTable: 'student_specializations',
    localKey: 'name',
    pivotForeignKey: 'specialization',
    relatedKey: 'index',
    pivotRelatedForeignKey: 'student_index',
    pivotColumns: ['id'],
  })
  declare students: ManyToMany<typeof Student>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
