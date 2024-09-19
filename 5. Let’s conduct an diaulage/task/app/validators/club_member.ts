import vine from '@vinejs/vine'

export const createClubMemberValidator = (possibleIndex: number | null = null) => {
    return vine.compile(
        vine.object({
            index: vine
                .number()
                .min(100000)
                .max(999999)
                .unique(async (db, value) => {
                        if(possibleIndex && Number(value) === possibleIndex) {
                            return true
                        }

                        return !(await db.from('club_members').where('index', value).first())
                    }
                ),
            firstName: vine.string().maxLength(255),
            lastName: vine.string().maxLength(255),
            status: vine.enum(['Active', 'Inactive', 'Trainee', 'Honorary']),
            password: vine.string().minLength(8)
        })
    )
}