import request from 'request';
import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import path from 'path';

const url = 'http://docs.google.com/spreadsheets/d/1BX7s2M5uOrcX0cgZmR7CnWcxh7U2YkRWE16d7TkwH5I/gviz/tq?tqx=out:csv&sheet=Butterflies';
const outFile = 'bfdb.json';
const imageLoaderScriptFile = 'imagelookup.js';

request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  const bfdb = parse(body, { columns: true });
  const imageLoaderScript = `export default {${bfdb.map(i => `'${i.image}': require('../assets/butterflies/${i.image}')`)}}`;
  fs.writeFile(path.resolve(__dirname, outFile), JSON.stringify(bfdb), err => {
    if (err) { return console.log(err); }
    console.log('Updated butterflies!');
  });
  fs.writeFile(path.resolve(__dirname, imageLoaderScriptFile), imageLoaderScript, err => {
    if (err) { return console.log(err); }
    console.log('Updated image loader script!');
  });
});