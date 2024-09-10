import vine from '@vinejs/vine'

export const createMemberValidator = vine.compile(
  vine.object({
    index: vine
      .number()
      .min(100000)
      .max(999999)
      .unique(async (db, value) => !(await db.from('members').where('index', value).first())),
    firstName: vine.string().maxLength(255),
    lastName: vine.string().maxLength(255),
    status: vine.enum(['onboarding', 'active', 'honorary', 'inactive'])
  })
)

export const updateMemberValidator = vine.compile(
  vine.object({
    firstName: vine.string().maxLength(255),
    lastName: vine.string().maxLength(255),
    status: vine.enum(['onboarding', 'active', 'honorary', 'inactive'])
  })
)
