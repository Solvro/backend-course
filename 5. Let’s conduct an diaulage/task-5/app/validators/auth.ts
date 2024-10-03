import vine from '@vinejs/vine'

export const createLoginValidator = vine.compile(vine.object({
    index: vine.string().minLength(6).maxLength(6),
    password: vine.string().minLength(8).maxLength(16),
}))
