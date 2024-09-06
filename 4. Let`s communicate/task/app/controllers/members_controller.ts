import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from './app/models/member.ts'

export default class MembersController {
   /**
   * @swagger
   * /members:
   *   get:
   *     summary: Gets the whole list of members
   *     responses:
   *       200:
   *         description: A list of members
   */
  public async index ({ response }: HttpContextContract) {
    const members = await Member.all()
    return response.ok(members)
  }
  /**
   * @swagger
   * /members/{id}:
   *   get:
   *     summary: Get a member of a particular ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The ID of the member
   *     responses:
   *       200:
   *         description: A single member
   *       404:
   *         description: Member not found
   */
  public async show ({ params, response }: HttpContextContract) {
    try {
      const member = await Member.findOrFail(params.id)
      return response.ok(member)
    } catch (error) {
      return response.notFound({ message: 'Member not found' })
    }
  }
  /**
   * @swagger
   * /members:
   *   post:
   *     summary: Create a new member
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - firstName
   *               - lastName
   *               - status
   *             properties:
   *               firstName:
   *                 type: string
   *               lastName:
   *                 type: string
   *               status:
   *                 type: string
   *     responses:
   *       201:
   *         description: Created
   */
  public async store ({ request, response }: HttpContextContract) {
    const data = request.only(['firstName', 'lastName', 'status'])
    const member = await Member.create(data)
    return response.created(member)
  }
  /**
   * @swagger
   * /members/{id}:
   *   put:
   *     summary: Update an existing member
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The ID of the member
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - firstName
   *               - lastName
   *               - status
   *             properties:
   *               firstName:
   *                 type: string
   *               lastName:
   *                 type: string
   *               status:
   *                 type: string
   *     responses:
   *       200:
   *         description: Updated
   *       404:
   *         description: Member not found
   */
  public async update ({ params, request, response }: HttpContextContract) {
    try {
      const member = await Member.findOrFail(params.id)
      const data = request.only(['firstName', 'lastName', 'status'])
      member.merge(data)
      await member.save()
      return response.ok(member)
    } catch (error) {
      return response.notFound({ message: 'Member not found' })
    }
  }
  /**
   * @swagger
   * /members/{id}:
   *   delete:
   *     summary: Delete a member
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The ID of the member
   *     responses:
   *       200:
   *         description: Deleted
   *       404:
   *         description: Member not found
   */
  public async destroy ({ params, response }: HttpContextContract) {
    try {
      const member = await Member.findOrFail(params.id)
      await member.delete()
      return response.ok({ message: 'Member deleted successfully' })
    } catch (error) {
      return response.notFound({ message: 'Member not found' })
    }
  }
}
