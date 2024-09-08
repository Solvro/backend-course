import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

export enum Status {
  TRAINEE = 'Trainee',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  HONORARY = 'Honorary',
}

export default class SolvroMember extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: Status | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // @computed()
  // get email() {
  //   return `${this.index}@student.pwr.edu.pl`
  // }
}
