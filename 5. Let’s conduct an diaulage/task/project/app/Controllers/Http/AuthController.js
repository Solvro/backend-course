'use strict'

class AuthController {
    async register({ request, auth }) {
        const userData = request.only(['index', 'password'])
        const user = await User.create(userData)
        await auth.login(user)
      }
      
    async login({ request, auth }) {
        const { index, password } = request.all()
        await auth.attempt(index, password)
    }
      
}

module.exports = AuthController
