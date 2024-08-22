import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Dzial from './dzial.js'
import Czlonek from './czlonek.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Zainteresowanie extends BaseModel {
  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'id_dzialu' })
  declare idDzialu?: number

  @column({ columnName: 'id_czlonka' })
  declare idCzlonka?: number

  @belongsTo(() => Dzial, {
    foreignKey: 'id_dzialu',
  })
  dzial: BelongsTo<typeof Dzial>

  @belongsTo(() => Czlonek, {
    foreignKey: 'id_czlonka',
  })
  czlonek: BelongsTo<typeof Czlonek>
}
