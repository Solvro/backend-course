/*
|--------------------------------------------------------------------------
| HTTP server entrypoint
|--------------------------------------------------------------------------
|
| The "server.ts" file is the entrypoint for starting the AdonisJS HTTP
| server. Either you can run this file directly or use the "serve"
| command to run this file and monitor file changes
|
*/

import 'reflect-metadata'
import { Ignitor, prettyPrintError } from '@adonisjs/core'
import { fileURLToPath } from 'node:url'
import { createServer } from 'node:https'
import { readFileSync } from 'node:fs'

/**
 * URL to the application root. AdonisJS need it to resolve
 * paths to file and directories for scaffolding commands
 */
const APP_ROOT = new URL('../', import.meta.url)

const sslPath = (name: string) => fileURLToPath(new URL(`ssh/${name}`, APP_ROOT))

/**
 * The importer is used to import files in context of the
 * application.
 */
const IMPORTER = (filePath: string) => {
  if (filePath.startsWith('./') || filePath.startsWith('../')) {
    return import(new URL(filePath, APP_ROOT).href)
  }
  return import(filePath)
}

new Ignitor(APP_ROOT, { importer: IMPORTER })
  .tap((app) => {
    app.booting(async () => {
      await import('#start/env')
    })
    app.listen('SIGTERM', () => app.terminate())
    app.listenIf(app.managedByPm2, 'SIGINT', () => app.terminate())
  })
  .httpServer()
  .start((handle) => {
    return createServer(
      {
        key: readFileSync(sslPath('key.pem'), 'utf-8'),
        cert: readFileSync(sslPath('cert.pem'), 'utf-8'),
      },
      handle
    )
  })
  .catch((error) => {
    process.exitCode = 1
    prettyPrintError(error)
  })
