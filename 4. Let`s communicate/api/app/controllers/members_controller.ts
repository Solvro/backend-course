import type { HttpContext } from '@adonisjs/core/http'
import SolvroMember from '#models/solvro_member'
import { createMemberValidator, updateMemberValidator } from '#validators/member'

export default class MembersController {
  /**
   *@description Display a list of resource
   */
  async index({}: HttpContext) {
    const members = await SolvroMember.all()
    return members
  }

  async store({ request }: HttpContext) {
    const payload = request.all()
    const data = await createMemberValidator.validate(payload)
    const member = await SolvroMember.create(data)
    return member
  }

  async show({ params }: HttpContext) {
    const member = await SolvroMember.find(params.index)
    return member
  }

  async update({ params, request, response }: HttpContext) {
    const member = await SolvroMember.find(params.index)
    if (!member) {
      response.status(404)
      response.send(`Member not found with given index: ${params.index}`)
      return
    }
    const payload = request.all()
    const data = await updateMemberValidator.validate(payload)
    console.log(data)

    await member.merge(data).save() //why it doesn't save to DB???
    return member
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const member = await SolvroMember.find(params.index)
    if (!member) {
      response.status(404)
      response.send(`Member not found with given index: ${params.index}`)
      return
    }
    await member.delete()
    response.status(204)
  }
}
