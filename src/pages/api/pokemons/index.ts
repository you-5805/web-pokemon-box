import { prisma } from '@/server/lib/prisma';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (_, res) => {
  const pokemons = await prisma.pokemon.findMany();

  res.json({
    pokemons,
  });
};

export default handler;
