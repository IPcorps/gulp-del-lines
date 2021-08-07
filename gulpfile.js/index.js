
// File extension router

const { watch } = require("gulp");

exports.watcher = () => {

    // TypeScript -> JavaScript
    const ts = require("./ts");
    watch(["plugin/**/*.ts", "test/**/*.ts", "!**/*.d.*"])
        .on("change", ts.change);

};
