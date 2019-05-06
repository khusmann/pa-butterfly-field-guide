import fetch from 'node-fetch';
import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import path from 'path';

const bfUrl = 'http://docs.google.com/spreadsheets/d/1BX7s2M5uOrcX0cgZmR7CnWcxh7U2YkRWE16d7TkwH5I/gviz/tq?tqx=out:csv&sheet=Butterflies';
const outFile = 'ButterflyDatabase.js';

updatedb = async () => {
  const bfRes = await fetch(bfUrl);
  const bfBody = await bfRes.text();

  const bfdb = parse(bfBody, { columns: true });
  const bfdbString = `
    const imagelookup = {${bfdb.map(i => `'${i.image}': require('../assets/butterflies/${i.image}')`)}};
    const bfdb_raw = ${JSON.stringify(bfdb)};
    const bfdb = bfdb_raw.map(i => ({
      ...i,
      image: imagelookup[i.image],
      nobs: parseInt(i.nobs)
    }));
    export default bfdb;
  `;
  fs.writeFile(path.resolve(__dirname, outFile), bfdbString, err => {
    if (err) { return console.log(err); }
    console.log('Updated butterflies!');
  });
}

updatedb();