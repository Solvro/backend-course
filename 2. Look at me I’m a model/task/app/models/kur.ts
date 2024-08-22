import Dzial from './dzial.js'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Kur extends BaseModel {
  @column({ isPrimary: true, columnName: 'nazwa_kursu' })
  declare nazwaKursu: string

  @column({ columnName: 'id_dzialu' })
  declare idDzialu?: number

  @column()
  declare zasoby: string

  @column()
  declare opis?: string
}
