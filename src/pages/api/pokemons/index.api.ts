import { prisma } from '@/server/lib/prisma';
import type { NextApiHandler } from 'next';

const handler: NextApiHandler = async (_, res) => {
  const pokemons = await prisma.pokemon.findMany({
    orderBy: {
      number: 'asc',
    },
    where: {
      id: {
        endsWith: '_1',
      },
    },
  });

  const withImageUrl = pokemons.map((p) => ({
    ...p,
    image: {
      sm: `/img/pokemon/32/${p.id}.png`,
      md: `/img/pokemon/96/${p.id}.png`,
    },
  }));

  res.json({
    pokemons: withImageUrl,
  });
};

export default handler;
