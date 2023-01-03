import type { PokedexEntry } from '@prisma/client';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      pokemons: (PokedexEntry & {
        image: {
          sm: string;
          md: string;
        }
      })[];
    };
  };
}>;
