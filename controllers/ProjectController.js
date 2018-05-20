const Project = require("../models").Project;
const defaultProject = [
  { Name: "Personal" },
  { Name: "Work" },
  { Name: "Home" }
];
const getAll = async function(req, res) {
  res.setHeader("Content-type", "application/json");
  let count = await Project.count();
  console.log("ProjectController get all, project", count);
  let projects;
  const { UserID } = req.user;
  if (count == 0) {
    [err, projects] = await to(
      Project.bulkCreate(
        defaultProject.map(project =>
          Object.assign({}, project, { UserID: UserID })
        )
      )
    );
  } else {
    [err, projects] = await to(Project.findAll({ UserID: req.user.UserID }));
  }
  const projects_json = projects.map(project => project.toWeb());
  return ReS(res, { projects: projects });
};
module.exports.getAll = getAll;
const get = async function(req, res) {};
module.exports.get = get;
const update = async function(req, res) {};
module.exports.update = update;
const remove = async function(req, res) {};
module.exports.remove = remove;
