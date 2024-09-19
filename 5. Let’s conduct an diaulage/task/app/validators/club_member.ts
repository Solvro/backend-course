import vine from '@vinejs/vine'

export const createClubMemberValidator = vine.compile(
    vine.object({
        index: vine
            .number()
            .min(100000)
            .max(999999)
            .unique(async (db, value) => !(await db.from('club_members').where('index', value).first())),
        firstName: vine.string().maxLength(255),
        lastName: vine.string().maxLength(255),
        status: vine.enum(['Active', 'Inactive', 'Trainee', 'Honorary']),
        password: vine.string().minLength(8)
    })
)

export const updateClubMemberValidator = vine.compile(
    vine.object({
        firstName: vine.string().maxLength(255).optional(),
        lastName: vine.string().maxLength(255).optional(),
        status: vine.enum(['Active', 'Inactive', 'Trainee', 'Honorary']).optional(),
        password: vine.string().minLength(8).optional()
    })
)