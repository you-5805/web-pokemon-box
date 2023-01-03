import { Pokemon } from '@prisma/client';
import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      pokemons: (Pokemon & {
        image: {
          sm: string;
          md: string;
        }
      })[];
    };
  };
}>;
