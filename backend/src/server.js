const express = require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = 3000;
app.listen(port, ()=> console.log(`O server está rodando na porta ${port}`));