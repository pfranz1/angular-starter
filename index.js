import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const args = process.argv.slice(2);
const isLocal = args[0] === "true";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  if (isLocal) {
    console.log(`Example app listening on port http://localhost:${port}`);
  } else {
    console.log(`Example app listening on port ${port}`);
  }
});

app.use("/plant", express.static(path.join(__dirname, "digital-plant-embed")));

//https://github.com/pillarjs/path-to-regexp#errors
app.get("/plant", (req, res) => {
  res.sendFile(path.join(__dirname, "digital-plant-embed/index.html"));
});

if (!isLocal) {
  app.use(express.static("dist/angular-starter/browser"));

  //https://github.com/pillarjs/path-to-regexp#errors
  app.get("{*foo}", (req, res) => {
    res.sendFile(
      path.join(__dirname, "dist/angular-starter/browser/index.html"),
    );
  });
}
