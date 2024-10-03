import { createMemberUpdateValidator } from "#validators/member"
import { HttpContext } from "@adonisjs/core/http"
import drive from "@adonisjs/drive/services/main"

export default class MembersController {
    async indexMe({ auth, response }: HttpContext) {
        try {
            const member = await auth.getUserOrFail()

            return response.ok(member)

        } catch (error) {
            return response.unauthorized({ error: error.message })
        }
    }

    async updateMe({ auth, request, response }: HttpContext) {
        const data = await createMemberUpdateValidator.validate(request.all())
        const member = await auth.getUserOrFail()

        const image = request.file('profilePhoto', {
            size: '10mb',
            extnames: ['jpg', 'png', 'jpeg'],
        })

        if (image) {
            const path = `members/${member.index}.${image.extname}`
            image.moveToDisk(path)
            member.merge({ photoUrl: await drive.use().getUrl(path) })
        }
        member.merge(data)
        member.save()

        return response.ok(member)
    }
}