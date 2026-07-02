const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user");

const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl, storeReturnTo } = require("../middleware");

const UserController = require("../controller/user");

router.get("/signup", storeReturnTo, UserController.signupPage);
router.post("/signup", wrapAsync(UserController.signup));
router.get("/login", storeReturnTo, UserController.loginPage);
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  UserController.login
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  UserController.google
);

router.get("/logout", UserController.logout);

module.exports = router;
