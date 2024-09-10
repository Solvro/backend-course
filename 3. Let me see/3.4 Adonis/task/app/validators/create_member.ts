import vine from '@vinejs/vine'

export const createMemberValidator = vine.compile(
    vine.object({
        index: vine
            .string()
            .unique(async (db, value) => !(await db.from('members').where('index', value).first())),
        first_name: vine.string().maxLength(255),
        last_name: vine.string().maxLength(255),
        status: vine.string(),
    })
)
