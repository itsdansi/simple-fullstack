const mongoose = require("mongoose");
const taskModel = require("../models/tasks.model");

const getAllTasks = async (req, res) => {
  const tasks = await taskModel.find();
  if (!tasks) {
    res.status(500).json({success: false, message: "No task found !"});
  } else res.status(200).json(tasks);
};

const postTask = async (req, res) => {
  const {title, summary, userId} = req.body;
  const task = new taskModel({
    title,
    summary,
    userId,
  });

  task
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err,
      });
    });
};

const updateTask = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({success: false, message: "Invalid task id!"});
  } else {
    const task = await taskModel.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {new: true}
    );
    if (!task) {
      res.status(500).json({
        success: false,
        message: `No task found with id : ${req.params.id}`,
      });
    }
    res.status(200).send(task);
  }
};

const deleteTask = async (req, res) => {
  taskModel
    .findByIdAndRemove(req.params.id)
    .then((task) => {
      if (task) {
        return res
          .status(200)
          .json({success: true, message: "task is deleted successfully"});
      } else {
        return res.status(404).json({success: false, message: "task not found"});
      }
    })
    .catch((err) => {
      return res.status(404).json({success: false, error: err});
    });
};

const getATask = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({success: false, message: "Invalid task id!"});
  } else {
    const task = await taskModel.findById(req.params.id);
    if (!task) {
      res.status(500).json({
        success: false,
        message: "No task found with that id",
      });
    } else res.status(200).send(task);
  }
};

const progressReport = async (req, res) => {
  // let totalTasksExist;
  // const totalTasks = await taskModel.estimatedDocumentCount({});
  // const totalFinishedTask = await taskModel.estimatedDocumentCount({
  //   where: {status: "$COMPLETED"},
  // });
  // console.log(totalFinishedTask);

  taskModel
    .aggregate([
      {
        $group: {
          _id: {
            $dateToString: {format: "%Y-%m-%d", date: "$createdAt"},
          },
          totalTasks: {$sum: 1},
          completedTasks: {
            $sum: {
              $cond: {
                if: {
                  status: "COMPLETED",
                },
                then: 1,
                else: 0,
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          completionRate: {$divide: ["$completedTasks", "$totalTasks"]},
          // completedTasks: "$completedTasks",
        },
      },
    ])
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });

  //   taskModel
  //     .aggregate([
  //       {
  //         $match: {status: "COMPLETED"}, // Add a $match stage to filter documents with status "COMPLETED"
  //       },
  //       {
  //         $group: {
  //           _id: {
  //             $dateToString: {format: "%Y-%m-%d", date: "$createdAt"},
  //           },
  //           totalTasks: {$sum: 1},
  //           completedTasks: {$sum: 1}, // Use $sum instead of $cond to count completed tasks
  //         },
  //       },
  //       {
  //         $project: {
  //           _id: 0,
  //           date: "$_id",
  //           // completionRate: {$divide: ["$completedTasks", "$totalTasks"]},
  //           totalTasks: "$totalTasks",
  //         },
  //       },
  //     ])
  //     .then((result) => {
  //       console.log(result);
  //       res.status(200).send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send(err); // Handle the error and send an appropriate response
  //     });
};

module.exports = {
  getATask,
  getAllTasks,
  postTask,
  updateTask,
  deleteTask,
  progressReport,
};
