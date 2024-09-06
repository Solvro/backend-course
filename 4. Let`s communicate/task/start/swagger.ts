import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class SwaggerProvider {
  public static async register(_app: ApplicationContract) {
    const swaggerDefinition = {
      openapi: '3.0.0',
      info: {
        title: 'Solvro API',
        version: '1.0.0',
        description: 'API documentation for the Solvro project',
      },
      servers: [
        {
          url: 'http://localhost:3333',
          description: 'Local development server',
        },
      ],
    }

    const options = {
      swaggerDefinition,
      apis: ['./start/routes.ts', './app/Controllers/Http/*.ts'], 
    }

    const swaggerSpec = swaggerJSDoc(options)

    return {
      swaggerSpec,
      swaggerUi,
    }
  }
}
