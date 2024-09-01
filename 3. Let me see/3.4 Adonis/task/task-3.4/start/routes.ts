/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import SolvroMember from '#models/solvro_member'

router.on('/').render('members', {
  members: await SolvroMember.all(),
})
