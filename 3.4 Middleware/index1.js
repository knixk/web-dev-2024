import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const myPath = __dirname + "/public/index.html";
  console.log(myPath);
  res.sendFile(myPath);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
