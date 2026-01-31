import { File } from 'megajs';
import fs from 'fs';
import path from 'path';

const MEGA_URL = 'https://mega.nz/file/PFBznKZT#nYkxgMKn2Rb8qgR_dUDyX0ci_EbhtRpCjRXReg74clg';
const OUTPUT_PATH = path.resolve('public/TEDxUPM_Official_Logo.png');

async function downloadLogo() {
    console.log(`Downloading logo from ${MEGA_URL}...`);
    try {
        const file = File.fromURL(MEGA_URL);
        await file.loadAttributes();
        console.log(`Found file: ${file.name} (${file.size} bytes)`);

        const data = await file.downloadBuffer();
        fs.writeFileSync(OUTPUT_PATH, data);
        console.log(`Logo successfully saved to ${OUTPUT_PATH}`);
    } catch (error) {
        console.error('Error downloading logo:', error);
        process.exit(1);
    }
}

downloadLogo();
