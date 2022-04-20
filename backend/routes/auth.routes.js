var express = require("express");
var passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const AuthService = require("../services/auth.service");
const service = new AuthService();

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post("/recovery", async (req, res, next) => {
  try {
    const { mail } = req.body;
    const rta = service.mail(mail);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
