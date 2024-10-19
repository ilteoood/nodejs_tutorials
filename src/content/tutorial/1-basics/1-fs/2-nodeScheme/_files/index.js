import fs from 'fs';

const fileContent = fs.readFileSync('file.txt', 'utf-8');

console.log('The content of the file is:', fileContent);
