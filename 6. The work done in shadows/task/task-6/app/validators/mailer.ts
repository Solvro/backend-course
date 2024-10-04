import vine from '@vinejs/vine'

export const createMailerValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    subject: vine.string(),
    text: vine.string(),
  })
)
