import { createMemberUpdateValidator } from "#validators/member"
import { HttpContext } from "@adonisjs/core/http"

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
        member.merge(data)
        member.save()

        return response.ok(member)
    }
}