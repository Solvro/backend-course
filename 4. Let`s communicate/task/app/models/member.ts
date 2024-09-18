import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import Status from '../../contracts/enums/status.js'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare index: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: Status

  @computed()
  get email() {
    return `${this.index}@solvro.pl`
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
