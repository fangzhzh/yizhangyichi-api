const { GOOGLE_USER_INFO_API } = require("../utils/Const");
const fetch = require("node-fetch");
const authService = require("./../services/AuthService");
const create = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const body = req.body;

  if (!body.unique_key && !body.email && !body.phone) {
    return ReE(res, "Please enter an email or phone number to register.");
  } else if (!body.password) {
    return ReE(res, "Please enter a password to register.");
  } else {
    let err, user;

    [err, user] = await to(authService.createUser(body));

    if (err) return ReE(res, err, 422);
    return ReS(
      res,
      {
        message: "Successfully created new user.",
        user: user.toWeb(),
        token: user.getJWT()
      },
      201
    );
  }
};
module.exports.create = create;

const get = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let user = req.user;

  return ReS(res, { user: user.toWeb() });
};
module.exports.get = get;

const update = async function(req, res) {
  let err, user, data;
  user = req.user;
  data = req.body;
  user.set(data);

  [err, user] = await to(user.save());
  if (err) {
    if (err.message == "Validation error")
      err = "The email address or phone number is already in use";
    return ReE(res, err);
  }
  return ReS(res, { message: "Updated User: " + user.email });
};
module.exports.update = update;

const remove = async function(req, res) {
  let user, err;
  user = req.user;

  [err, user] = await to(user.destroy());
  if (err) return ReE(res, "error occured trying to delete user");

  return ReS(res, { message: "Deleted User" }, 204);
};
module.exports.remove = remove;

const login = async function(req, res) {
  const body = req.body;
  let err, user;

  [err, user] = await to(authService.authUser(req.body));
  if (err) return ReE(res, err, 422);

  return ReS(res, { token: user.getJWT(), user: user.toWeb() });
};
module.exports.login = login;

const getAccessToken = async function(req, res) {
  const query = req.query;

  console.log("getAccessToken", req.body, req.params, req.query, req.user);
  const { deviceType, deviceId, pushToken } = query;

  [err, userResponse] = await to(
    fetch("https://www.googleapis.com/oauth2/v3/userinfo?alt=json", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.user}`
      }
    })
  );
  if (userResponse.status != 200) {
    console.log("getAccessToken userResponse", userResponse.status);
    res.statusCode = userResponse.status;
    return res.json({ success: false, error: userResponse.status });
  } else {
    if (err) {
      console.log("getAccessToken err", err);
      return ReE(res, err, 403);
    }
    const userInfo = await userResponse.json();
    console.log("getAccessToken userInfo", userInfo);
    [err, user] = await to(
      authService.createIfNotExistUser({
        UserID: userInfo.email.replace(/[@.]/g, "_"),
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        firstName: userInfo.family_name,
        lastName: userInfo.given_name,
        type: "google",
        deviceID: deviceId,
        deviceType: deviceType,
        pushToken: pushToken
      })
    );
    if (err) TE(err);

    console.log(err, user);
    if (err) TE("user already exists with that phone number");

    return ReS(res, {
      message: "getAccessToken good",
      token: user.getJWT()
    });
  }
};
module.exports.getAccessToken = getAccessToken;
