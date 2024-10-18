import fs from 'node:fs/promises';

const fileContent = await fs.readFile('file.txt', 'utf-8');

console.log('The content of the file is:', fileContent);
