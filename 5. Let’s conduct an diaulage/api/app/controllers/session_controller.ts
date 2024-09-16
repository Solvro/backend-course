import SolvroMember from '#models/solvro_member'
import { createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async login({ request, auth, response }: HttpContext) {
    const { index, password } = request.only(['index', 'password'])
    const user = await SolvroMember.verifyCredentials(index, password)
    await auth.use('web').login(user)
    response.redirect().toRoute('/dashboard')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('/')
  }

  async register({ request }: HttpContext) {
    const payload = request.all()
    const data = await createMemberValidator.validate(payload)
    const member = await SolvroMember.create(data)
    return member
  }
}
