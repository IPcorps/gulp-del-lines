
import gulp from "gulp"; // -DEL
import stream from "stream"; // -DEL

import gulpDel from "../plugin/main"; // -DEL
// const gulpdel = require("../plugin/main"); // -DEL

const sWrite = new stream.Writable({
    objectMode: true,
    write(file, _, _cb) { console.log(file.contents.toString()) }
});

gulp.src("test/test.ts").pipe(gulpDel).pipe(sWrite);
