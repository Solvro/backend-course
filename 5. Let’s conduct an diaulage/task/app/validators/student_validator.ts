import vine from '@vinejs/vine'
import { Status } from '#models/student'

/**
 * Validator to validate the payload when creating
 * a new student.
 */
export const createStudentValidator = vine.compile(
  vine.object({
    index: vine
      .number()
      .range([100000, 999999])
      .unique(async (db, value) => !(await db.from('students').where('index', value).first())),
    firstName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowUnderscores: false, allowSpaces: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      ),
    lastName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowUnderscores: false, allowSpaces: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      ),
    password: vine.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/), // minimum 6 characters, at least one uppercase letter, one lowercase letter and one number
    status: vine.enum(Object.values(Status)),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing student.
 */
export const updateStudentValidator = vine.compile(
  vine.object({
    firstName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowUnderscores: false, allowSpaces: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      )
      .optional(),
    lastName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowUnderscores: false, allowSpaces: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      )
      .optional(),
    password: vine
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
      .optional(), // minimum 6 characters, at least one uppercase letter, one lowercase letter and one number
    status: vine.enum(Object.values(Status)).optional(),
  })
)
