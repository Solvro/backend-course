import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Zainteresowanie extends BaseModel {
  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'id_dzialu' })
  declare idDzialu?: number

  @column({ columnName: 'id_czlonka' })
  declare idCzlonka?: number
}
