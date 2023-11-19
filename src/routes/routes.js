const express = require("express");
const router = express.Router();

const connection = require("../db/connection");

router.get("/", (req, res) => {
    res.status(200).json({
        "message": "Rota padrão!"
    });
});

router.get("/tasks", (req, res) => {
    res.status(200).json({
        "message": "Rota de tarefas!"
    });
});

router.get("/tasks/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        "message": `Rota de tarefas com id ${id}!`
    });
});

router.post("/tasks", (req, res) => {
    const body = req.body;
    res.status(201).json(body);
});

router.put("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.status(200).json({
        "message": `Rota de tarefas com id ${id}!`,
        "task": body
    });
});

router.delete("/tasks/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        "message": `Rota de tarefas com id ${id}!`
    });
});

module.exports = router;