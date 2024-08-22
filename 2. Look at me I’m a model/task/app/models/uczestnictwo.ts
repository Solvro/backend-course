import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Uczestnictwo extends BaseModel {
  @column({ isPrimary: true, columnName: 'id_wpisu' })
  declare idWpisu: number

  @column({ columnName: 'nazwa_kursu' })
  declare nazwaKursu?: string

  @column({ columnName: 'id_czlonka' })
  declare idCzlonka?: number

  @column({ columnName: 'data_rozpoczecia' })
  declare dataRozpoczecia?: Date

  @column({ columnName: 'data_zakonczenia' })
  declare dataZakonczenia?: Date

  @column()
  declare ocena?: number
}
