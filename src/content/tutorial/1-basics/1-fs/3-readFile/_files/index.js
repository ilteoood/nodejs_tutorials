import fs from 'node:fs';

fs.readFile('file.txt', 'utf-8', (err, fileContent) => {
    if (!err) {
        console.log('The content of the file is:', fileContent);
    }
});
