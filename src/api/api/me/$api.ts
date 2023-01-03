import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/me'
  const POST = 'POST'

  return {
    post: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
    $post: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
