const pool = require("../db/db");

exports.createTask = async (req, res) => {
    try {
      const { title } = req.body;
  
      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }
  
      const result = await pool.query(
        "INSERT INTO tasks (title, completed) VALUES ($1, false) RETURNING *",
        [title]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



exports.getTasks = async (req, res) => {
    try {
      const result = await pool.query(
        "SELECT * FROM tasks ORDER BY id DESC"
      );
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
  exports.updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
  
      const result = await pool.query(
        "UPDATE tasks SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
        [title, completed, id]
      );
  
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
  exports.deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
  
      await pool.query(
        "DELETE FROM tasks WHERE id=$1",
        [id]
      );
  
      res.json({ message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  