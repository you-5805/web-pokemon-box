import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';

const downloadImage = (url: string, filepath: string) => {
  https.get(url, (res) => {
    res.pipe(fs.createWriteStream(filepath));
  });
};

const map = {
  i11_2: 'n916f',
  i72_2: 'n946f',
  i90_2: 'n745f',
  i90_3: 'n745d',
  i100_2: 'n741p',
  i100_3: 'n741f',
  i100_4: 'n741m',
  i113_2: 'n960b',
  i113_3: 'n960y',
  i113_4: 'n960w',
  i138_2: 'n550f',
  i189_2: 'n917f',
  i199_2: 'n849f',
  i223_2: 'n128b',
  i223_3: 'n128c',
  i241_2: 'n876f',
  i292_2: 'n934f',
  i310_2: 'n479h',
  i310_3: 'n479w',
  i310_4: 'n479f',
  i310_5: 'n479s',
  i310_6: 'n479c',
  i320_2: 'n875f',
  i375_2: 'n952t',
  i375_3: 'n952n',
};

const url32 = (id: string) => `https://img.yakkun.com/poke/icon32/${id}.gif`;
const url96 = (id: string) => `https://img.yakkun.com/poke/icon96/${id}.gif`;

const main = async () => {
  for (const [key, value] of Object.entries(map)) {
    const id = key.slice(1);
    downloadImage(url32(value), path.join(__dirname, '..', 'public', 'img', 'pokemon', '32', `${id}.png`));
    downloadImage(url96(value), path.join(__dirname, '..', 'public', 'img', 'pokemon', '96', `${id}.png`));
  }
};

main();
