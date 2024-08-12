import express from "express";
import next from "next";
import { json } from "body-parser";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(json());

  // Custom API endpoints or middleware
  server.get("/api/custom", (req, res) => {
    res.json({ message: "Hello from custom API!" });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
