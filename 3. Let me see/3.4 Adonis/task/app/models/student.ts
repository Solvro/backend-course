import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: Status

  @computed()
  get email(): string {
    return `${this.index}@student.pwr.edu.pl`
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

export enum Status {
  IMPLEMENTATION = 'IMPLEMENTATION',
  ACTIVE = 'ACTIVE',
  ALUMNI = 'ALUMNI',
  INACTIVE = 'INACTIVE',
}
