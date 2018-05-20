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
  return getByType("chi");
};
module.exports.getChi = getChi;

const getZhang = async function(req, res) {
  return getByType("zhang");
};
module.exports.getZhang = getZhang;

const get = async function(req, res) {};
module.exports.get = get;

const create = async function(req, res) {};
module.exports.create = create;

const update = async function(req, res) {};
module.exports.update = update;

const remove = async function(req, res) {};
module.exports.remove = remove;
