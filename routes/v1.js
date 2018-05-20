const express = require("express");
const router = express.Router();

const UserController = require("./../controllers/UserController");
const CompanyController = require("./../controllers/CompanyController");
const HomeController = require("./../controllers/HomeController");
const TodoController = require("./../controllers/TodoController");
const ProjectController = require("./../controllers/ProjectController");

const custom = require("./../middleware/custom");

const passport = require("passport");
const path = require("path");

require("./../middleware/passport")(passport);
/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    status: "success",
    message: "Parcel Pending API",
    data: { version_number: "v1.0.0" }
  });
});

router.get(
  "/accesstoken",
  passport.authenticate("bearer", { session: false }),
  UserController.getAccessToken
);

// project
router.get(
  "/projects",
  passport.authenticate("jwt", { session: false }),
  ProjectController.getAll
);
router.get(
  "/projects/:project_id",
  passport.authenticate("jwt", { session: false }),
  ProjectController.get
); // R
router.put(
  "/projects/:project_id",
  passport.authenticate("jwt", { session: false }),
  // custom.company,
  ProjectController.update
); // U
router.delete(
  "/projects/:project_id",
  passport.authenticate("jwt", { session: false }),
  // custom.company,
  ProjectController.remove
); // D

// todo
router.get(
  "/todos",
  passport.authenticate("jwt", { session: false }),
  TodoController.getChi
);

router.get(
  "/todos/chi",
  passport.authenticate("jwt", { session: false }),
  TodoController.getChi
);
router.get(
  "/todos/zhang",
  passport.authenticate("jwt", { session: false }),
  TodoController.getZhang
);

router.get(
  "/todos/:todo_id:",
  passport.authenticate("jwt", { session: false }),
  TodoController.get
);

// users
router.post("/users", UserController.create); // C
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.get
); // R
router.put(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.update
); // U
router.delete(
  "/users",
  passport.authenticate("jwt", { session: false }),
  UserController.remove
); // D
router.post("/users/login", UserController.login);

router.post(
  "/companies",
  passport.authenticate("jwt", { session: false }),
  CompanyController.create
); // C
router.get(
  "/companies",
  passport.authenticate("jwt", { session: false }),
  CompanyController.getAll
); // R

router.get(
  "/companies/:company_id",
  passport.authenticate("jwt", { session: false }),
  custom.company,
  CompanyController.get
); // R
router.put(
  "/companies/:company_id",
  passport.authenticate("jwt", { session: false }),
  custom.company,
  CompanyController.update
); // U
router.delete(
  "/companies/:company_id",
  passport.authenticate("jwt", { session: false }),
  custom.company,
  CompanyController.remove
); // D

router.get(
  "/dash",
  passport.authenticate("jwt", { session: false }),
  HomeController.Dashboard
);

//********* API DOCUMENTATION **********
router.use(
  "/docs/api.json",
  express.static(path.join(__dirname, "/../public/v1/documentation/api.json"))
);
router.use(
  "/docs",
  express.static(path.join(__dirname, "/../public/v1/documentation/dist"))
);
module.exports = router;
