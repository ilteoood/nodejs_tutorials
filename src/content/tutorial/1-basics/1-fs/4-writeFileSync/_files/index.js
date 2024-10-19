import fs from 'node:fs';

const NAME_OF_THE_FILE;
const FILE_CONTENT;

fs.writeFileSync(NAME_OF_THE_FILE, FILE_CONTENT);

console.log('The content of the file is the same: ', fs.readFileSync(NAME_OF_THE_FILE) === FILE_CONTENT);

