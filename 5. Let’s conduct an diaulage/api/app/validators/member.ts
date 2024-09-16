import vine from '@vinejs/vine'
import { Status } from '#models/solvro_member'

export const createMemberValidator = vine.compile(
  vine.object({
    index: vine
      .number()
      .min(100000)
      .max(999999)
      .unique(
        async (db, value) => !(await db.from('solvro_members').where('index', value).first())
      ),
    password: vine.string(),
    firstName: vine.string().maxLength(255),
    lastName: vine.string().maxLength(255),
    status: vine.enum(Status).nullable().optional(),
  })
)

export const updateMemberValidator = vine.compile(
  vine.object({
    index: vine
      .number()
      .min(100000)
      .max(999999)
      .unique(async (db, value) => !(await db.from('solvro_members').where('index', value).first()))
      .optional(),
    firstName: vine.string().maxLength(255).optional(),
    lastName: vine.string().maxLength(255).optional(),
    status: vine.enum(Status).nullable().optional(),
  })
)
