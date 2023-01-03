import type { DefineMethods } from "aspida";

export type Methods = DefineMethods<{
  post: {
    resBody: {
      code: 'created' | 'postponed'
    }
  }
}>