import fs from 'node:fs/promises';

const NAME_OF_THE_FILE;
const FILE_CONTENT;

await fs.writeFile(NAME_OF_THE_FILE, FILE_CONTENT);

console.log('The content of the file is the same: ', (await fs.readFile(NAME_OF_THE_FILE)) === FILE_CONTENT);

