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

router.get('/:index', async ({ request, view }) => {
  const index = request.param('index')
  const member = await SolvroMember.find(index)
  return view.render('member_details', { member, index })
})
