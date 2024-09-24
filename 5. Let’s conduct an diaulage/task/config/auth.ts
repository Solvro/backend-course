import { Env } from '@adonisjs/core/env';

const authConfig: AuthConfig = {
    guard: 'api',
    list: {
      api: {
        driver: 'jwt',
        tokenProvider: {
          type: 'jwt',
          driver: 'jwt',
          secret: Env.get('APP_KEY'),
          options: {
            expiresIn: '1h',
          },
        },
        persistJwt: true,
        model: () => import('App/Models/User'),
      },
    },
  }
  
  export default authConfig;
  