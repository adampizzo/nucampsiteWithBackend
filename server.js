import express from "express";
import morgan from "morgan";
import campsiteRouter from "./routes/campsiteRouter.js";
import promotionRouter from "./routes/promotionRouter.js";
import partnerRouter from "./routes/partnerRouter.js";
// const express = require("express"); // Can't use this because we added " 'type': 'module' " to package.json.

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRouter);
app.use("/partners", partnerRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;
