import type { HttpContext } from '@adonisjs/core/http'

import Member from '#models/member'
import { createMemberValidator } from '#validators/member'

export default class MembersController {
  /**
   * Return list of all members or paginate through
   * them
   */
  async index({}: HttpContext) {
    return Member.query()
  }

  /**
   * Handle form submission to create a new member
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createMemberValidator)
  }

  /**
   * Display a single member by index.
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle the form submission to update a specific member by index
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Handle the form submission to delete a specific member by index.
   */
  async destroy({ params }: HttpContext) {}
}
