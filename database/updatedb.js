import request from 'request';
import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import path from 'path';

const url = 'http://docs.google.com/spreadsheets/d/1BX7s2M5uOrcX0cgZmR7CnWcxh7U2YkRWE16d7TkwH5I/gviz/tq?tqx=out:csv&sheet=Butterflies';
const outFile = 'ButterflyDatabase.js';

request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  const bfdb = parse(body, { columns: true });
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
});