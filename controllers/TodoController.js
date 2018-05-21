const Todo = require("../models").Todo;
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
  const query = req.query;
  const user = req.user;
  const todo = req.body;
  const curTodo = Object.assign({}, todo, { UserID: user.UserID });
  console.log("TodoController create old todo", todo, "new todo", curTodo);
  [err, newTodo] = await to(Todo.create(curTodo));
  const todoJson = newTodo.toWeb();
  if (err) return ReE(res, err, 404);
  return ReS(res, { todo: todoJson });
};

module.exports.create = create;

const update = async function(req, res) {};
module.exports.update = update;

const remove = async function(req, res) {};
module.exports.remove = remove;
