import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Czlonek extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare imie: string

  @column()
  declare nazwisko: string

  @column()
  declare status: string
}
