import vine from '@vinejs/vine'
import Status from '../../contracts/enums/status.js'

export const createMemberValidator = vine.compile(
  vine.object({
    index: vine.string().trim().fixedLength(6).regex(/[0-9]/),
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    status: vine.enum(Status),
  })
)
