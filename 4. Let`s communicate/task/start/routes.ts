import router from '@adonisjs/core/services/router'
import SwaggerProvider from './swagger'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

const swagger = await SwaggerProvider.register({} as any)
router.resource('members', 'members_controller').apiOnly()

router.get('/docs', ({ response }) => {
    return response.redirect('/swagger-ui')
})



router.get('/swagger-ui', ({ response }) => {
    swagger.swaggerUi.setup(swagger.swaggerSpec)
})