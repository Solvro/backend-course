/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Member from '#models/member'
import router from '@adonisjs/core/services/router'

router.on('/').render('members', {
  members: await Member.all(),
})
