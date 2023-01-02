import { createWriteStream } from "fs";
import { get } from "http";
import { join } from "path";
import { Transform } from "stream";
// import { stdout } from "process";

get("http://127.0.0.1:3000", (res) => {
    res.pipe(dataTransFormer)
        // .pipe(stdout)
        .pipe(createWriteStream(join(__dirname, "./data.txt")));
});

const dataTransFormer = new Transform({
    transform(chunk, _enc, cb) {
        this.push(formater(chunk) + "\n");
        cb();
    },
});

const NODE_VALID = "[invalid data]";

function formater(chunk) {
    const data = chunk.toString();

    try {
        const info = JSON.parse(data);
        if (!info?.age || typeof info.age !== "number") {
            return NODE_VALID;
        }
        if (info.age < 20) {
            return JSON.stringify({
                ...info,
                name: `yonger pepole ${info?.name}`,
            });
        }
    } catch (_) {
        console.error(_);
        return NODE_VALID;
    }
}
