/**
 * @author WMXPY
 * @namespace BuildUtils
 * @description CLI
 */

import { Argument, Coco, Command } from "@sudoo/coco";
import * as Path from "path";
import { buildUtilCleanPath } from "./clean-path";

const coco = Coco.create();

type CleanPathCommandOptions = {

    readonly path: string;
};

coco.command(Command.create('clean-path')
    .argument(Argument.create('path'))
    .then(async (args: CleanPathCommandOptions) => {
        const path: string = Path.resolve(args.path);
        await buildUtilCleanPath(path);
    }),
);
