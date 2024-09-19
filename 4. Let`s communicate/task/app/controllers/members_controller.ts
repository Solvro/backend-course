import Member from '#models/member'
import { createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
  FIELDS = ['id', 'index', 'firstName', 'lastName', 'status']

  async index({ request, response }: HttpContext) {
    const page = Number(request.input('page', 1))
    const perPage = Number(request.input('perPage', 10))

    const firstName = request.input('firstName', '')
    const lastName = request.input('lastName', '')
    const status = request.input('status', '')

    const sort = decodeURIComponent(request.input('sort', '')).replaceAll("'", '')

    const membersQuery = Member.query()

    if (firstName) membersQuery.where('first_name', firstName)
    if (lastName) membersQuery.where('last_name', lastName)
    if (status) membersQuery.where('status', status)

    if (sort) {
      const sortDirection = sort[0] === '+' ? 'asc' : sort[0] === '-' ? 'desc' : ''
      const fieldToSortBy = sort.substring(1)
      if (this.FIELDS.includes(fieldToSortBy) && sortDirection) {
        membersQuery.orderBy(fieldToSortBy, sortDirection)
      }
    }

    const members = await membersQuery.limit(perPage).offset(perPage * (page - 1))

    response.json({
      message: 'Members fetched successfully!',
      data: members,
    })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMemberValidator)
    const member = await Member.create({ ...payload })
    response.status(201).json({
      message: 'Member created successfully!',
      data: member,
    })
  }

  async show({ response, params: { id } }: HttpContext) {
    const member = await Member.find(id)
    if (member) {
      response.status(200).json({
        message: 'Member fetched successfully!',
        data: member,
      })
    } else {
      response.status(404).json({
        message: 'Member not found',
        id,
      })
    }
  }

  async update({ request, response, params: { id } }: HttpContext) {
    const member = await Member.find(id)
    if (member) {
      const { firstName, lastName, status } = request.all()

      member.firstName = firstName
      member.lastName = lastName
      member.status = status

      await member.save()

      response.status(200).json({
        message: 'Member updated successfully!',
        data: member,
      })
    } else {
      response.status(404).json({
        message: 'Member not found',
      })
    }
  }

  async destroy({ response, params: { id } }: HttpContext) {
    const member = await Member.find(id)
    if (member) {
      await member.delete()

      response.status(200).json({
        message: 'Member deleted successfully!',
        data: member,
      })
    } else {
      response.status(404).json({
        message: 'Member not found',
        id,
      })
    }
  }
}
