const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Mon premier backend Docker fonctionne !");
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});

