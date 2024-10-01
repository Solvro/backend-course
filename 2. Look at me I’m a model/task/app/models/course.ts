import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: string
// juz rozumiem roznice w uzyciu modelu i skad problemy z typami, ale nie chce mi sie juz poprawiac, super zadanko pozdrawiam
  @column()
  declare department_id: string

  @column()
  declare name: string

  @column()
  declare link: string | null

  @column()
  declare description: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}