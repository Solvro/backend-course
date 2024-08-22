import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Dzial extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_dzialu' })
  declare idDzialu: number

  @column()
  declare nazwa: string
}
