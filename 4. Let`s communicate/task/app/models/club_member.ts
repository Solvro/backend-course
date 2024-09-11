import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

export default class ClubMember extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'Active' | 'Inactive' | 'Trainee' | 'Honorary'

  @column.dateTime({ 
      autoCreate: true,
      serialize: (value) => value.toFormat('yyyy-LL-dd HH:mm:ss')
  })
  declare createdAt: DateTime

  @column.dateTime({ 
      autoCreate: true, 
      autoUpdate: true,
      serialize: (value) => value.toFormat('yyyy-LL-dd HH:mm:ss')
  })
  declare updatedAt: DateTime

  @computed()
  get email() {
      return `${this.index}@student.pwr.edu.pl`
  }
}