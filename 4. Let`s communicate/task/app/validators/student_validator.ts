import vine from '@vinejs/vine'
import { Status } from '#models/student'

/**
 * Validator to validate the payload when creating
 * a new student.
 */
export const createStudentValidator = vine.compile(
  vine.object({
    index: vine.number().range([100000, 999999]),
    firstName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowSpaces: false, allowUnderscores: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      ),
    lastName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowSpaces: false, allowUnderscores: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      ),
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
      .alpha({ allowSpaces: false, allowUnderscores: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      )
      .optional(),
    lastName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowSpaces: false, allowUnderscores: false })
      .transform<string>(
        (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      )
      .optional(),
    status: vine.enum(Object.values(Status)).optional(),
  })
)
