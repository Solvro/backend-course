import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import MemberCourse from './member_course.js'
import MemberDepartment from './member_department.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'implementation' | 'active' | 'alumni' | 'inactive'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => MemberCourse)
  declare courses: HasMany<typeof MemberCourse>

  @hasMany(() => MemberDepartment)
  declare departments: HasMany<typeof MemberDepartment>
}
