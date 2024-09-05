import vine from '@vinejs/vine'

export const createMemberValidator = vine.compile(vine.object({
    index: vine.string().maxLength(6).minLength(6).unique(async (db, value) => !(await db.from('members').where('index', value).first())),
    firstName: vine.string(),
    lastName: vine.string(),
    status: vine.enum(['wdrożeniowy', 'aktywny', 'honorowy', 'nieaktywny']),
}))