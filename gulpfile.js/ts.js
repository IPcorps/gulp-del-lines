
// A few "require"
const { src, dest } = require("gulp"),
    ts = require("gulp-typescript"),
    terser = require("gulp-terser");
// gulpif = require("gulp-if"),
// gulprename = require("gulp-rename");

let tsProject = ts.createProject("./tsconfig.json");

exports.change = path => {

    // To see something happen
    console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(), path, "start of processing...");

    // TypeScript processing
    const tsRes = src(path)                                                                 // Reading the file 
        .pipe(tsProject())                                                                  // TypeScript -> JavaScript
        .on("error", console.log);                                                          // For oops caught a mistake 🙀

    tsRes.js
        // .pipe(gulpif(wdsOpt.middle, dest(".")))                                          // Saving an intermediate file
        .pipe(terser())                                                                     // Javascript minifier and ... what else you want
        // .pipe(gulpif(!!wdsOpt.extjs, gulprename({ extname: wdsOpt.extjs })))             // Output file extension
        // .pipe(gulpif(!!wdsOpt.dirFrom, gulprename(                                       // Checking and setting the path
        //     dir => dir.dirname = dir.dirname.replace(wdsOpt.dirFrom, wdsOpt.dirTo))))
        .pipe(dest("."))                                                                    // Saving the file
        .on("end", () => console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(), path, "ts processing is complete!"));

    // tsRes.dts.pipe(dest("."))                                                            // Saving the d.ts file
    //     .on("end", () => console.log("\x1B[90m%s \x1b[36m%s\x1b[0m", new Date().toLocaleTimeString(), path, "d.ts processing is complete!"));

}
