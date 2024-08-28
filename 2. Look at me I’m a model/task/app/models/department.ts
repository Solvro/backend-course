import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Member from './member.js'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @manyToMany(() => Member, {
    pivotTable: 'member_departments',
    relatedKey: 'id',
  })
  declare members: ManyToMany<typeof Member>

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
