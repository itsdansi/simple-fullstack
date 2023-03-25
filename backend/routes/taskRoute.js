const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasks.controller");

router.post("/", taskController.postTask);
router.get("/", taskController.getAllTasks);
router.get("/progress", taskController.progressReport);
router.get("/:id", taskController.getATask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
