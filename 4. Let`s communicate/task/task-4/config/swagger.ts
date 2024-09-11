import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
  title: 'Task 4',
  description: 'something for tests',
  version: '0.0.1',
  info: {
    title: 'task 4',
    version: '0.0.1',
    description: 'abc',
  },
  servers: [
    {
      url: 'https://localhost:3333',
      description: 'Local server with https',
    },
  ],
  ignore: ['/swagger', '/docs'],
  prefferedPutPath: 'PATCH',
  snakeCase: true,
  common: {
    parameters: {},
    headers: {},
  },
  tagIndex: 0,
}
