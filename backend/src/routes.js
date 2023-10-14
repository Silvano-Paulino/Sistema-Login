const express = require("express");

const router = express.Router();

const users = [{
    id: 1,
    nome: "Silvano",
    email: "silvano@gmail.com",
    senha: "123456"
}];

router.post("/login", (req, res) => {
    const {email, senha} = req.body;

    const user = users.find(user => user.email === email && user.senha === senha);

    if(user) {
        return res.status(200).json(user);
    }

    return res.status(401).json("Credenciais inválidas!");
});

module.exports = router;