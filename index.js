const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("./model/taskSchema.js");
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://citmern2202:5i6vG9AgWWkIPfbo@cluster0.ggnbro5.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected!"));

app.post("/createtask", function (req, res) {
  let { title, priority } = req.body;

  let task = new Task({
    title: title,
    priority: priority,
  });

  task.save();

  res.send({ success: "data created" });

  //   res.send("Hello World");
});

app.get("/createtask", async function (req, res) {
  let data = await Task.find({});
  res.send(data);
});

app.post("/edittask", async function (req, res) {
  let { id, title } = req.body;
  console.log(id);

  await Task.findByIdAndUpdate({ _id: id }, { title: title });
});

app.listen(8000, function () {
  console.log("Server Is Running");
});

// citmern2202
// 5i6vG9AgWWkIPfbo
