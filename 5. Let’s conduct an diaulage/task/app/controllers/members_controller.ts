import type { HttpContext } from '@adonisjs/core/http'
import Member from "#models/member";
import {createMemberValidator, updateMemberValidator} from "#validators/member";

export default class MembersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    return Member.query().paginate(request.input('page', 1), request.input('perPage', 10))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const newMember = await createMemberValidator.validate(request.all())
    await Member.create(newMember)
    return {message: "Member created successfully."}
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
    const updatedMember = await updateMemberValidator.validate(request.all())
    const currMember = await Member.findByOrFail(params.index)
    currMember.merge(updatedMember)
    await currMember.save()
    return {message: "Member updated successfully.", currMember}
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const member = await Member.findOrFail(params.index)
    await member.delete()
    return {message: "Member deleted successfully."}
  }
}
