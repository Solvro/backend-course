import vine from '@vinejs/vine'

export const createMemberValidator = vine.compile(
    vine.object({
        index: vine
            .number()
            .min(100000)
            .max(999999)
            .unique(async (db, value) =>
                !(await db.from('members').where('index', value).first())
            ),
        name: vine.string().minLength(2).maxLength(25),
        surname: vine.string().minLength(2).maxLength(50),
        status: vine.enum(['ACTIVE', 'NOT_ACTIVE', 'NEW', 'HONORED']),
    }
)
)