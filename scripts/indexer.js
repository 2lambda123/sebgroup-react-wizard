const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../src');

const components = fs
  .readdirSync(source)
  .filter(
    (name) =>
      fs.lstatSync(path.resolve(source, name)).isDirectory() &&
      !name.startsWith('__') &&
      !name.startsWith('@types') &&
      !name.startsWith('assets') &&
      !name.startsWith('contexts') &&
      !name.startsWith('stories') &&
      !name.startsWith('styles')
  );

const indexes = components.map((name) => `./src/${name}/index.ts`);

fs.writeFileSync(path.resolve(source, 'index.json'), JSON.stringify(indexes, null, 4));
