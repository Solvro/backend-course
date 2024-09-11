import type { HttpContext } from '@adonisjs/core/http'

import ClubMember from "#models/club_member";
import { createClubMemberValidator } from '#validators/club_member';

export default class ClubMembersController {
    async index({request}: HttpContext) {
        return await ClubMember.query().paginate(request.input('page', 1), request.input('perPage', 10))
    }

    async show({params}: HttpContext) {
        return await ClubMember.findOrFail(params.index)
    }

    async store({request}: HttpContext) {
        const inputData = await createClubMemberValidator().validate(request.all())
        const member = await ClubMember.create({...inputData})
        return { message: 'Member created successfully', member}
    }

    async update({params, request}: HttpContext) {
        const inputData = await createClubMemberValidator(Number(params.index)).validate(request.all())
        const member = await ClubMember.findOrFail(params.index)
        member.merge(inputData).save()
        return { message: 'Member updated successfully', member}
    }

    async destroy({params}: HttpContext) {
        const member = await ClubMember.findOrFail(params.index)
        await member.delete()
        return { message: 'Member deleted successfully'}
    }
}