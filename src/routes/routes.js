const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

const connection = require("../db/connection");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Rota padrão!",
  });
});

router.get("/tasks", TaskController.getAllTasks);

router.get("/tasks/:id", TaskController.getTaskById);

router.post("/tasks", TaskController.createTask);

router.put("/tasks/:id", TaskController.updateTask);

router.delete("/tasks/:id", TaskController.deleteTask);

module.exports = router;
