
const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  host: "database-service",
  user: "user",
  password: "pass",
  database: "mydb",
  port: 5432,
});

client.connect();

app.get("/", async (req, res) => {
  const result = await client.query("SELECT NOW()");
  res.send("Backend + DB connected: " + result.rows[0].now);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
