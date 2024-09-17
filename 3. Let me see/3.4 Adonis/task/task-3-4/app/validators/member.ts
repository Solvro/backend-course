import vine from '@vinejs/vine'
import Status from '../../contracts/enums/Status.js'

export const createMemberValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    status: vine.enum(Status),
  })
)
