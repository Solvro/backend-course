/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Member from "#models/member";
import {createMemberValidator} from "#validators/member";

router.get('/', (async ({view}) => {
  const members = await Member.all();
  return view.render('members', {members})
}))

router.get('/create', async ({view}) => {
  return view.render('member_create')
})

router.post('/create', async ({request, response}) => {
  const data = request.all()
  const payload = await createMemberValidator.validate(data)
  await Member.create(payload)
  return response.redirect('/')
})


router.get('/:index', async ({request, view}) => {
  const index = request.param('index')
  const member = await Member.findByOrFail('index', index)
  return view.render('member_details', {member})
})

