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

router.get('/', async ({ view }) => {
  return view.render('pages/members', {
    members: await Member.all(),
  })
})

router.get('/:id', async ({ request, view }) => {
  const id = request.param('id')
  try {
    const member = await Member.findByOrFail('id', id)
    const email = `${member.firstName.toLowerCase()}.${member.lastName.toLowerCase()}@solvro.pl`
    return view.render('pages/details', { member: member, email: email })
  } catch (err) {
    return view.render('pages/errors/not_found', { memberId: id })
  }
})
