import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class StudentDepartment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare student_id: string

  @column()
  declare department_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
