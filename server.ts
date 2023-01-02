import { randomUUID } from "crypto";
// import { createReadStream } from "fs";
import { createServer } from "http";
// import { join } from "path";
import { Readable } from "stream";

createServer(handler).listen(3000, () => console.log("listening on port 3000"));

function handler(_req, res) {
  //   createReadStream(join(__dirname, "../demo.tree")).pipe(res);
  new Readable({
    read(_size) {
      for (const item of generData()) {
        this.push(item);
      }
      this.push(null);
    },
  }).pipe(res);
}

function* generData(): Generator<string> {
  for (let i = 0; i < 1000; i++) {
    yield JSON.stringify({ name: "Jone Xin", age: i, uid: randomUUID() });
  }
}
