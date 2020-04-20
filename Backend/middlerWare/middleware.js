// just a function that have access req and res cycle

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // getting token from the header
  const token = req.header("auth-token");
  console.log("this is header toker " + token);

  //check if not  token
  if (!token) {
    return res.status(401).json({ msg: " no token authorization denied " });
  }

  //if their is toke the we will verify
  try {
    const decode = jwt.verify(token, config.get("jwtSecret")); //payload will be in decode

    console.log("this is decode just a payload " + decode);

    //creating a objct in req with name users
    req.user = decode.admin;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
