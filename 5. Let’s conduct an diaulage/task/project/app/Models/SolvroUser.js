'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SolvroUser extends Model {
    @column({ isPrimary: true })
    id

    @column()
    index

    @column()
    password

    async updateProfile({ request, auth }) {
        const user = auth.user
        const profilePic = request.file('profile_pic', {
          types: ['image'],
          size: '2mb'
        })
      
        if (profilePic) {
          await profilePic.move('uploads')
          user.profilePic = profilePic.fileName
          await user.save()
        }
    }     
}

module.exports = SolvroUser
