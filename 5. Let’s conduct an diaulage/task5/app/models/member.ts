import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['index'],
  passwordColumnName: 'password',
})

export default class Member extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string 

  @column()
  declare lastName: string

  @column()
  declare status: 'implementation' | 'active' | 'alumni' | 'inactive'

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare picture: string

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
  declare updatedAt: DateTime | null

}