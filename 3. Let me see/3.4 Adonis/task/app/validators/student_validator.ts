import vine from '@vinejs/vine'
import { Status } from '#models/student'

export const createStudentValidator = vine.compile(
  vine.object({
    index: vine.number().range([100000, 999999]),
    firstName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowUnderscores: false })
      .transform((value) => {
        return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      }),
    lastName: vine
      .string()
      .trim()
      .maxLength(30)
      .alpha({ allowUnderscores: false })
      .transform((value) => {
        return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
      }),
    status: vine.enum(Object.values(Status)),
  })
)
