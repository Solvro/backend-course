/*
|--------------------------------------------------------------------------
| Define HTTP limiters
|--------------------------------------------------------------------------
|
| The "limiter.define" method creates an HTTP middleware to apply rate
| limits on a route or a group of routes. Feel free to define as many
| throttle middleware as needed.
|
*/

import limiter from '@adonisjs/limiter/services/main'

export const throttle = limiter.define('api', () => {
  return limiter
    .allowRequests(15)
    .every('1 minute')
    .limitExceeded((error) => {
      error
        .setStatus(400)
        .setMessage('Too many requests. Try again later')
    })
})