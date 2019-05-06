import fetch from 'node-fetch';
import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import path from 'path';

const bfUrl = 'http://docs.google.com/spreadsheets/d/1BX7s2M5uOrcX0cgZmR7CnWcxh7U2YkRWE16d7TkwH5I/gviz/tq?tqx=out:csv&sheet=Butterflies';
const groupUrl = 'http://docs.google.com/spreadsheets/d/1BX7s2M5uOrcX0cgZmR7CnWcxh7U2YkRWE16d7TkwH5I/gviz/tq?tqx=out:csv&sheet=Groups';
const outFile = 'ButterflyDatabase.js';

updatedb = async () => {
  const bfBody = await (await fetch(bfUrl)).text();
  const groupBody = await (await fetch(groupUrl)).text();

  const bfdb = parse(bfBody, { columns: true });
  const bfgdb = parse(groupBody, { columns: true });
  const bfdbString = `
    const imagelookup = {
      ${[...bfdb, ...bfgdb].map(i => `'${i.image}': require('../assets/butterflies/${i.image}')`)}
    };
    const bfdb_raw = ${JSON.stringify(bfdb)};
    const bfgdb_raw = ${JSON.stringify(bfgdb)};
    const bfdb = {
      bf: bfdb_raw.map(i => ({
        ...i,
        image: imagelookup[i.image],
        nobs: parseInt(i.nobs)
      })),
      grp: bfgdb_raw.map(i => ({
        ...i,
        image: imagelookup[i.image],
      })),
    };
    export default bfdb;
  `;
  fs.writeFile(path.resolve(__dirname, outFile), bfdbString, err => {
    if (err) { return console.log(err); }
    console.log('Updated butterflies!');
  });
}

updatedb();