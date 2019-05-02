import request from 'request';
import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import path from 'path';

const url = 'http://docs.google.com/spreadsheets/d/1BX7s2M5uOrcX0cgZmR7CnWcxh7U2YkRWE16d7TkwH5I/gviz/tq?tqx=out:csv&sheet=Butterflies';
const outFile = 'bfdb.json'

request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  const bfdb = JSON.stringify(parse(body, { columns: true }));
  fs.writeFile(path.resolve(__dirname, outFile), bfdb, err => {
    if (err) { return console.log(err); }
    console.log('Updated butterflies!');
  });
});