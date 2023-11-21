const db = require("../db/connection");

const getAllTasks = async () => {
  const [tasks] = await db.execute("SELECT * FROM tasks");
  return tasks;
};

const getTaskById = async (id) => {
  const [task] = await db.execute("SELECT * FROM tasks WHERE id = ?", [id]);
  return task;
};

const createTask = async (title, description, status, creator_id) => {
  const [{ insertId }] = await db.execute(
    "INSERT INTO tasks (title, description, status, creator_id) VALUES (?, ?, ?, ?)",
    [title, description, status, creator_id]
  );
  return insertId;
};

const updateTask = async (id, title, description, status) => {
  await db.execute(
    "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?",
    [title, description, status, id]
  );
};

const deleteTask = async (id) => {
  await db.execute("DELETE FROM tasks WHERE id = ?", [id]);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
