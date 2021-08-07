
import stream from "stream";

export default new stream.Transform({
    objectMode: true,
    transform(file, _, cb) {
        file.contents = Buffer.from(file.contents.toString().replace(/^.*-DEL$/mg, ""));
        cb(null, file);
    }
});
