import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './me'
import type { Methods as Methods1 } from './pokemons'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/me'
  const PATH1 = '/api/pokemons'
  const GET = 'GET'
  const POST = 'POST'

  return {
    me: {
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    pokemons: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
