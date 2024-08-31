import ClubMember from '#models/club_member'
import { createClubMemberValidator } from '#validators/club_member'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClubMembersController {
    async index({request, view}: HttpContext) {
        const members = await ClubMember.query().paginate(
            request.input('page', 1),
            request.input('perPage', 10)
        )
        return view.render('club_members/index', { members })
    }

    async showMember({request, view}: HttpContext) {
        const member = await ClubMember.findByOrFail('index', request.param('index'))
        return view.render('club_members/showMember', {member})
    }

    async createMember({view}: HttpContext) {
        return view.render('club_members/createMember')
    }

    async storeMember({request, response, session}: HttpContext) {
        const inputData = await createClubMemberValidator.validate(request.all())
        await ClubMember.create({...inputData}) 
        session.flash('add-member-notification', 'Successfully added a new member')       

        return response.redirect().toRoute('/members')
    }
}