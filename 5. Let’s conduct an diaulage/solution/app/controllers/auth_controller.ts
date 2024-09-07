import Member from '#models/member'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async login({ request, auth }: HttpContext) {
    const { index, password } = request.only(['index', 'password'])
    const member = await Member.verifyCredentials(index, password)
    await auth.use().login(member)

    return { message: 'Member successfully logged in', member }
  }
}
