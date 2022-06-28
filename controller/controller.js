//THIS CONTROLS THE APP. DATA MANIPULATION

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//database connection
mongoose.connect(
  "mongodb+srv://tTest:test@ctrack.ecydj.mongodb.net/?retryWrites=true&w=majority"
);

//create schema
const todoSchema = new mongoose.Schema({
  item: String
});

//create model
const Todo = mongoose.model("Todo", todoSchema);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  //module is a javascript file
  app.get("/todo", function (req, res) {
    //get data from mongodb and pass it to view
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });
  app.post("/todo", urlencodedParser, function (req, res) {
    //get data from view and add it to mongodb
    var newTodo = Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
  app.delete("/todo/:item", function (req, res) {
    //delete the requested item from mongodb
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
};