import ClubMember from '#models/club_member'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClubMembersController {
    async index({view}: HttpContext) {
        const members = await ClubMember.all()
        return view.render('club_members/index', {members})
    }

    async showMember({request, view}: HttpContext) {
        const member = await ClubMember.findByOrFail('index', request.param('index'))
        return view.render('club_members/showMember', {member})
    }
}