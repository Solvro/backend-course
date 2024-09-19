import ClubMember from '#models/club_member'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthLoginController {
    async login({request, auth}: HttpContext) {
        const {index, password} = request.only(['index', 'password'])
        const member = await ClubMember.verifyCredentials(index, password)
        await auth.use().login(member)

        return { message: 'Member successfully logged in.', member }
    }
}