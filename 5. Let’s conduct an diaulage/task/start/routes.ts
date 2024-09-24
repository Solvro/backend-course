import router from '@adonisjs/core/services/router'
import hash from '@adonisjs/core/services/hash'
import User from 'App/Models/user.ts'

router.post('/register', async ({ request, response }) => {
  const { index, password } = request.only(['index', 'password'])

  const hashedPassword = await hash.make(password)

  const user = await User.create({
    index,
    password: hashedPassword,
  })

  return response.created(user)
})


router.post('/login', async ({ request, auth, response }) => {
    const { index, password } = request.only(['index', 'password'])
  
    const user = await User.query().where('index', index).first()
  
    if (!user) {
      return response.unauthorized('Invalid credentials')
    }
  
    const isPasswordValid = await hash.verify(user.password, password)
    if (!isPasswordValid) {
      return response.unauthorized('Invalid credentials')
    }
  
    const token = await auth.use('api').generate(user)
  
    return { token }
  })

  router.get('/profile', async ({ auth }) => {
    await auth.use('api').authenticate()
    return auth.user
  }).middleware('auth')