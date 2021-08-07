
import stream from "stream";

import del from "../plugin/main";

const txt = `

import * as iBABYLON from "@babylonjs/core"; // -DEL
import * as iGUI from "@babylonjs/gui"; // -DEL

const BABYLON = iBABYLON as typeof iBABYLON & { GUI: typeof iGUI }; // -DEL

const canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement;
const engine = new BABYLON.Engine(canvas);

`;

const sRead = new stream.Readable({
    objectMode: true,
    read() { this.push({ contents: Buffer.from(txt) }) }
});

const sWrite = new stream.Writable({
    objectMode: true,
    write(file, _, _cb) { console.log(file.contents.toString()) }
});

sRead.pipe(del).pipe(sWrite);
