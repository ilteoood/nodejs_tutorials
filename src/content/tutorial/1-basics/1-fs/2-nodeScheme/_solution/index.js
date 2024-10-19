import fs from 'node:fs';

const fileContent = fs.readFileSync('file.txt', 'utf-8');

console.log('The content of the file is:', fileContent);
