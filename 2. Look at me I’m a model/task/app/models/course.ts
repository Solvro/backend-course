import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column } from '@adonisjs/lucid/orm'
import Field from './field.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import slugify from '@sindresorhus/slugify'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare fieldId: number

  @belongsTo(() => Field)
  declare field: BelongsTo<typeof Field>

  @column()
  declare resource: string

  @column()
  declare description: string

  @beforeSave()
  static async slugifyUrl(course: Course) {
    course.url = `https://solvro.pl/blog/${slugify(course.name, { lowercase: true })}`
  }

  @column()
  declare url: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
