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

// router.on('/').render('members', {
//     students: await Member.all(),
//   })
  

router.get('/', async ({ view }) => {
    return view.render('members', {
        members: await Member.all(),
    })
})

router.get('/:index', async ({ request, view }) => {
    const index = request.param('index') 
    const member = await Member.findByOrFail('index', index)
    return view.render('member', {member})
})

router.on('create').render('create')

  