import type { HttpContext } from '@adonisjs/core/http'

import Member from '#models/member'
import { createMemberValidator, updateMemberValidator } from '#validators/member'

export default class MembersController {
  /**
   * Return list of all members or paginate through
   * them
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 10
    return Member.query().paginate(page, limit)
  }

  /**
   * Handle form submission to create a new member
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createMemberValidator)
    const member = await Member.create(payload)
    return { message: 'Member created.', member }
  }

  /**
   * Display a single member by index.
   */
  async show({ params }: HttpContext) {
    return await Member.findOrFail(params.index)
  }

  /**
   * Handle the form submission to update a specific member by index
   */
  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(updateMemberValidator)
    const currMember = await Member.findByOrFail(params.index)
    currMember.merge(payload)
    await currMember.save()
    return { message: 'Member updated successfully.', currMember }
  }

  /**
   * Handle the form submission to delete a specific member by index.
   */
  async destroy(ctx: HttpContext) {
    const member = await this.show(ctx)
    await member.delete()
    return { message: 'Member successfully deleted.' }
  }
}
