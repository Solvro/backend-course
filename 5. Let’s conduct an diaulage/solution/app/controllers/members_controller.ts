import Member from '#models/member'
import MemberAggregationService from '#services/member_aggregation_service'
import { createMemberValidator, updateMemberValidator } from '#validators/member'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'

export default class MembersController {
  /**
   * Display a list of resource
   */
  @inject()
  async index({ request }: HttpContext, memberAggregationService: MemberAggregationService) {
    return await memberAggregationService.byStatusAndIndexRange()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = await createMemberValidator.validate(request.all())
    const member = await Member.create(data)
    return { message: 'Member successfully created.', member }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Member.findOrFail(params.index)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = await updateMemberValidator.validate(request.all())
    const member = await Member.findOrFail(params.index)
    const image = request.file('photo', {
      size: '10mb',
      extnames: ['jpeg', 'jpg', 'png'],
    })

    if (image) {
      const path = `members/${member.index}.${image.extname}`
      await image.moveToDisk(path)
      member.merge({ photo: await drive.use().getUrl(path) })
    }

    member.merge(data)
    member.save()

    return { message: 'Member successfully updated.', member }
  }

  /**
   * Delete record
   */
  async destroy(ctx: HttpContext) {
    const member = await this.show(ctx) // można również odwoływać się do innych funkcji. Jeśli chcemy utworzyć helper/serwis powinien być o w innym pliku
    await member.delete()
    return { message: 'Member successfully deleted.' }
  }
}
