const Todo = require("../models").Todo;
const UserTodo = require("../models").UserTodo;
const getByType = async function(req, res, type) {
  res.setHeader("Content-type", "application/json");
  [err, todos] = await to(
    Todo.findAll({ UserID: req.user.UserID, todoType: type })
  );
  if (err) return ReE(res, err, 404);
  const todos_json = todos.map(todo => todo.toWeb());
  return ReS(res, { todos: todos_json });
};

const getChi = async function(req, res) {
  return getByType(req, res, "chi");
};
module.exports.getChi = getChi;

const getZhang = async function(req, res) {
  return getByType(req, res, "zhang");
};
module.exports.getZhang = getZhang;

const get = async function(req, res) {};
module.exports.get = get;

const create = async function(req, res) {
  const user = req.user;
  const todo = req.body;
  const curTodo = Object.assign({}, todo, { UserID: user.UserID });
  console.log("TodoController create old todo", todo, "new todo", curTodo);
  [err, newTodo] = await to(Todo.create(curTodo));
  if (err) return ReE(res, err, 500);
  const userTodoInfo = Object.assign(
    {},
    {
      UserID: user.UserID,
      TodoID: newTodo.TodoID
    }
  );
  [err, userTodo] = await to(UserTodo.create(userTodoInfo));
  if (err) return ReE(res, err, 500);
  const todoJson = newTodo.toWeb();
  return ReS(res, { todo: todoJson });
};

module.exports.create = create;

const update = async function(req, res) {
  const user = req.user;
  const todo = req.body;
  [err, oldTodo] = await to(Todo.findOne({ where: { TodoID: todo.TodoID } }));
  oldTodo.set(todo);
  [err, updatedTodo] = await to(oldTodo.save());
  if (err) return ReE(res, err, 500);
  const todoJson = updatedTodo.toWeb();
  return ReS(res, { todo: todoJson });
};
module.exports.update = update;

const remove = async function(req, res) {};
module.exports.remove = remove;
