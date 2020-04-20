const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/user");

exports.signUp = (req, res, next) => {
  // validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    res.status(422).json({
      errorMessage: errors.array(),
    });
  }else {
  // check for existing user in DB
  User.findOne({ email: req.body.email }).then((userExists) => {
    if (userExists) {
      res.status(403).json({
        error: "email already exists",
      });
    } else {
      //   create new user and add into DB
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      bcrypt.hash(password, 12).then((hashedPw) => {
        User({
          name: name,
          email: email,
          password: hashedPw,
        })
          .save()
          .then((resp) => {
            res.status(201).json({
              success: "user was created !",
              user: resp,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          });
      });
    }
  });
}
};

exports.signIn = (req, res, next) => {
  // user signin logic
  const { email, password } = req.body;

  if (!email || !password) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      res.status(400).json({
        error: "please provide email and passowrd",
      });
    }
  }

  User.findOne({ email: email }).then((resp) => {
    if (!resp) {
      res.status(401).json({
        error: "email not found",
      });
    }
    bcrypt
      .compare(password, resp.password)
      .then((isEqual) => {
        if (!isEqual) {
          res.status(401).json({
            error: "incorrect credentials",
          });
        } else {
          const token = jwt.sign(
            {
              id: resp._id,
            },
            "thisismysecret",
            {
              expiresIn: "1h",
            }
          );
          res.status(200).json({
            status: "success",
            token: token,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
};

exports.secret = (req, res, next) => {
  res.status(200).json({
    data: "I have access to secret",
  });
};
