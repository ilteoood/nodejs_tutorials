import fs from 'node:fs';

const NAME_OF_THE_FILE = 'file.txt';
const FILE_CONTENT = 'Hey, here is your content.';

fs.writeFileSync(NAME_OF_THE_FILE, FILE_CONTENT);

console.log('The content of the file is the same:', fs.readFileSync(NAME_OF_THE_FILE, 'utf-8') === FILE_CONTENT);

