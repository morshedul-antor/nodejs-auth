const userRepo = require("../repositories/userRepo");
const roleRepo = require("../repositories/roleRepo");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.unauthorized("Not Authenticated!");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.unauthorized("Not Authenticated!");
    }

    const user = await userRepo.getById(decoded.sid);
    const role = await roleRepo.getById(user.roleId);

    user.roleName = role.name;
    req.user = user;

    next();
  });
};

const isAuthAdmin = (req, res, next) => {
  isAuth(req, res, () => {
    if (req.user.roleName.includes("admin")) {
      next();
    } else {
      return res.forbidden("Admin access required!");
    }
  });
};

const isAuthModerator = (req, res, next) => {
  isAuth(req, res, () => {
    const roles = ["admin", "moderator"];

    if (req.user.roleName.some((role) => roles.includes(role))) {
      next();
    } else {
      return res.forbidden("Admin or Moderator access required!");
    }
  });
};

const isAuthUser = (req, res, next) => {
  isAuth(req, res, () => {
    const roles = ["admin", "moderator", "user"];

    if (req.user.roleName.some((role) => roles.includes(role))) {
      next();
    } else {
      return res.forbidden("Admin, Moderator or User access required!");
    }
  });
};

module.exports = { isAuthAdmin, isAuthModerator, isAuthUser, isAuth };
