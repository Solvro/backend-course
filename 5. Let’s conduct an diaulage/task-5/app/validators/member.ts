import vine from '@vinejs/vine'

export const createMemberValidator = vine.compile(vine.object({
    index: vine.string().maxLength(6).minLength(6).unique(async (db, value) => !(await db.from('members').where('index', value).first())),
    firstName: vine.string(),
    lastName: vine.string(),
    status: vine.enum(['implementing', 'active', 'inactive', 'honorary']),
    password: vine.string().minLength(8).maxLength(16),
}))

export const createMemberUpdateValidator = vine.compile(vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    status: vine.enum(['implementing', 'active', 'inactive', 'honorary']),
}))