/*
|--------------------------------------------------------------------------
| Bouncer abilities
|--------------------------------------------------------------------------
|
| You may export multiple abilities from this file and pre-register them
| when creating the Bouncer instance.
|
| Pre-registered policies and abilities can be referenced as a string by their
| name. Also they are must if want to perform authorization inside Edge
| templates.
|
*/

import SolvroMember from '#models/solvro_member'
import { Bouncer } from '@adonisjs/bouncer'

/**
 * Delete the following ability to start from
 * scratch
 */
export const editMember = Bouncer.ability((currentMember: SolvroMember, toEditId: Number) => {
  return currentMember.index === toEditId
})

export const deleteMember = Bouncer.ability((currentMember: SolvroMember, toEditId: Number) => {
  return currentMember.index === toEditId
})
