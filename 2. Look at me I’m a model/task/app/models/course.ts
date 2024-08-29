import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Student from '#models/student'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Specialization from '#models/specialization'
import slugify from '@sindresorhus/slugify'

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
    localKey: 'name',
    foreignKey: 'specialization',
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

  @beforeSave()
  static async slugifyLink(course: Course) {
    if (course.$dirty.name) {
      course.link = `https://solvro.pl/blog/${slugify(course.name)}`
    }
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
