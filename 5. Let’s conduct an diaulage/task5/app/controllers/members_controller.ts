import drive from '@adonisjs/drive/services/main'
import Member from '#models/member'
import { createMemberValidator, updateMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
    async index({request}: HttpContext) {
        return await Member.query().paginate(request.input('page', 1), request.input('perPage', 10))
    }

    async store({ request }: HttpContext) {
        const data = await createMemberValidator.validate(request.all())
        const member = await Member.create(data)
        return { message: 'Member successfully created.', member }
      }
    
    async show({ params }: HttpContext) {
        return await Member.findOrFail(params.index)
    }
    
    async update({ params, request }: HttpContext) {
        const data = await updateMemberValidator.validate(request.all())
        const member = await Member.findOrFail(params.index)

        const image = request.file('picture', {
            size: '2mb',
            extnames: ['jpeg', 'jpg', 'png'],
        })
      
        if (image) {
            const path = `members/${member.index}.${image.extname}`
            await image.moveToDisk(path)
            member.merge({ picture: await drive.use().getUrl(path)})
            member.save()
        }
    
        member.merge(data)
        member.save()
    
        return { message: 'Member successfully updated.', member }
    }

    async destroy(ctx: HttpContext) {
        const member = await this.show(ctx)
        await member.delete()
        return { message: 'Member successfully deleted.' }
    }
}