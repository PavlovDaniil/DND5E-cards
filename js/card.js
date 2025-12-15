// import cardActions from "./actions/cardActions";
import fs from 'fs/promises';
import path from 'path';

async function cards() {
    const filePath = path.join(process.cwd(), '..', 'api', 'cards.json');
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    console.log(jsonData);
}
cards();
