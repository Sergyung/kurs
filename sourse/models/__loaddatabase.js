import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

import { currentDir } from '../utility.js';

const dataFileName = join(currentDir, 'data', 'valute.json');

const dataFile = readFileSync(dataFileName, 'utf8');
const database = JSON.parse(dataFile);
export { database };

export function saveDatabase() {
    const s = JSON.stringify(database);
    writeFile(dataFileName, s, 'utf8');
}