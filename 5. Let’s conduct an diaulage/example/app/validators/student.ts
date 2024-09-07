import vine from '@vinejs/vine'

export const updateStudentValidator = vine.compile(
  vine.object({
    firstName: vine.string().maxLength(255).optional(),
    lastName: vine.string().maxLength(255).optional(),
  })
)
