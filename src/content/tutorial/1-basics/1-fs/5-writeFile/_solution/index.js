import fs from 'node:fs/promises';

const NAME_OF_THE_FILE = 'file.txt';
const FILE_CONTENT = 'Hey, here is your content.';

await fs.writeFile(NAME_OF_THE_FILE, FILE_CONTENT);

console.log('The content of the file is the same:', (await fs.readFile(NAME_OF_THE_FILE, 'utf-8')) === FILE_CONTENT);

