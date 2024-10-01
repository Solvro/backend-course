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
    return view.render('members', {
        members: await Member.all(),
    })
})

router.get('/create', async ({ view }) => {
    return view.render('create')
})

router.post('create', async ({ request, response }) => {
    await Member.create({
      index: request.input('index'), 
      firstName: request.input('firstName'),
      lastName: request.input('lastName'),
      status: request.input('status'),
    })
    return response.redirect('/')
})  

router.get('/:index', async ({ request, view }) => {
    const index = request.param('index') 
    const member = await Member.findByOrFail('index', index)
    return view.render('member', {member})
})



  