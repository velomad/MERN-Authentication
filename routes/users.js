const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const { check, body } = require("express-validator");
const isAuth = require("../middlewares/isAuth");

// POST routes
router.post(
  "/signup",
  [
    check("name", "name is required")
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 2 }),
    body("email")
      .isEmail()
      .withMessage("please enter a valid email")
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
  ],
  usersController.signUp
);

router.post(
  "/signin",
  [
    body("email")
      .isEmail()
      .withMessage("please enter a valid email")
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
  ],
  usersController.signIn
);

// GET routes
router.get("/secret", isAuth, usersController.secret);

module.exports = router;
