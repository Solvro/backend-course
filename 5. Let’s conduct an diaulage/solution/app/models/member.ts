import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
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
  declare photo: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare status: 'implementation' | 'active' | 'alumni' | 'inactive'

  @column.dateTime({
    autoCreate: true,
    serialize: (value) => value.toFormat('yyyy-LL-dd HH:mm:ss'),
  })
  declare createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value) => value.toFormat('yyyy-LL-dd HH:mm:ss'),
  })
  declare updatedAt: DateTime

  // /**
  //  * Runs before creating and updating the model
  //  */
  // @beforeSave()
  // static async hashPassword(member: Member) {
  //   if (member.$dirty.password) {
  //     member.password = await hash.make(member.password)
  //   }
  // }
}
