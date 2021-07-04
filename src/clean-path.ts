/**
 * @author WMXPY
 * @namespace BuildUtils
 * @description Clean Path
 */

import { RMRFFolder } from "@sudoo/io";
import * as Fs from 'fs';
import * as Path from 'path';

export const buildUtilCleanPath = async (path: string): Promise<void> => {

    const targetPath: string = Path.resolve(path);

    if (!Fs.existsSync(targetPath)) {
        Fs.mkdirSync(targetPath);
    }

    const files: string[] = Fs.readdirSync(targetPath);
    for (const file of files) {

        await RMRFFolder(Path.join(targetPath, file));
    }
};
