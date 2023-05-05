const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const http = require("http");
const express = require("express");
const app = express();

var server = require("http").createServer(app);

app.get("/", (request, response) => {
  response.sendStatus(200)

});

const listener = server.listen(process.env.PORT)


        const url = "https://github.com/freyacodes/Lavalink/releases/download/3.7.5/Lavalink.jar";

const start = () => {
  
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
});
}
start();
