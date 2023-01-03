import pokemons from '@/data/gen9.json';
import { PrismaClient } from '@prisma/client';
import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';

const prisma = new PrismaClient();

const downloadImage = (url: string, filepath: string) => {
  https.get(url, (res) => {
    res.pipe(fs.createWriteStream(filepath));
  });
};

const main = async () => {
  // const filtered = all
  //   .filter(({ name }) => !name.startsWith('メガ'))
  //   .filter(({ name }) => !name.includes('ヒスイ') && !name.includes('アローラ') && !name.includes('ガラル'))
  //   .filter((pokemon) => pokemon.paldeaNumber !== undefined)
  //   .filter(({ name }) => !name.includes('しろすじ') && !name.includes('相棒'))
  //   .sort(({ paldeaNumber: pna }, { paldeaNumber: pnb }) => Number(pna) - Number(pnb))
  //   .map((p) => ({ ...p, baseName: p.name.includes('(') ? p.name.split('(')[0] : p.name }))
  //   .map((p) => ({ ...p, variant: p.baseName !== p.name ? p.name.split('(')[1].split(')')[0] : undefined }));

  // writeFileSync(path.join(__dirname, 'data', 'gen9.json'), JSON.stringify(filtered));

  for (const p of pokemons) {
    const record = await prisma.pokemon.findUniqueOrThrow({ where: { name: p.name } });

    downloadImage(
      `https://img.yakkun.com/poke/icon96/n${p.number}.gif`,
      path.join(__dirname, '..', 'public', 'img', 'pokemon', '96', `${record.id}.png`)
    );
  }
};

main();
