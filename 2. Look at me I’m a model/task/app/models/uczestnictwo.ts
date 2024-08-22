import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Kur from './kur.js'
import Czlonek from './czlonek.js'

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

  @belongsTo(() => Kur, {
    foreignKey: 'nazwa_kursu',
  })
  kur: BelongsTo<typeof Kur>

  @belongsTo(() => Czlonek, {
    foreignKey: 'id_czlonka',
  })
  czlonek: BelongsTo<typeof Czlonek>
}
