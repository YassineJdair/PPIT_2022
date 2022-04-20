const jwt = require("jsonwebtoken");

// Generate new token method
const authToken = (id) => {
  return jwt.sign({ id }, "jwt_secret_password", {
    expiresIn: "2w",
  });
};

module.exports = { authToken };
