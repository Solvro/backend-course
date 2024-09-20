import ClubMember from "#models/club_member"
import MemberAggregationService from "#services/member_aggregation_service"
import { createClubMemberValidator, updateClubMemberValidator } from "#validators/club_member"
import { inject } from "@adonisjs/core"
import { HttpContext } from "@adonisjs/core/http"
import drive from "@adonisjs/drive/services/main"

export default class ClubMembersController {
    async index({request}: HttpContext) {
        return await ClubMember.query().paginate(request.input('page', 1), request.input('perPage', 10))
    }

    @inject()
    async indexAggregation({}: HttpContext, memberAggregationService: MemberAggregationService) {
        return await memberAggregationService.aggregateMembersByStatusAndIndexRange()
    }

    async show({params}: HttpContext) {
        return await ClubMember.findOrFail(params.index)
    }

    async store({request}: HttpContext) {
        const inputData = await createClubMemberValidator.validate(request.all())
        const member = await ClubMember.create({...inputData})
        return { message: 'Member created successfully', member}
    }

    async update({params, request}: HttpContext) {
        const inputData = await updateClubMemberValidator.validate(request.all())
        const member = await ClubMember.findOrFail(params.index)

        const image = request.file('profilePhoto', {
            size: '10mb',
            extnames: ['jpeg', 'jpg', 'png']
        })

        if(image) {
            const path = `club_members/${member.index}.${image.extname}`
            await image.moveToDisk(path)
            member.merge({ profilePhoto: await drive.use().getUrl(path) })
        }

        member.merge(inputData).save()
        return { message: 'Member updated successfully', member}
    }

    async destroy({params}: HttpContext) {
        const member = await ClubMember.findOrFail(params.index)
        await member.delete()
        return { message: 'Member deleted successfully'}
    }
}