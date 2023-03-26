// import express from "express";
// import {User} from "../models/user";

// import * as bcrypt from "bcrypt";

const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

const secretKey = "mySecretKey";

const register = async (req, res) => {
  userModel
    .findOne({email: req.body.email})
    .exec()
    .then((user) => {
      if (user) {
        return res.status(409).json({
          error: "Email is taken already!",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const newUser = new userModel({
              userName: req.body.userName,
              email: req.body.email,
              password: hash,
            });

            newUser
              .save()
              .then((user) => {
                res.status(201).json({
                  message: "User created",
                });
              })
              .catch((err) => {
                return res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};

const login = (req, res, next) => {
  // console.log(req.body);

  userModel
    .findOne({email: req.body.email})
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: "Email or password is incorrect",
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            error: "Email or password is incorrect",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            // process.env.SECRET,
            secretKey,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Login successful!",
            token: token,
            user: [{id: user._id, email: user.email}],
          });
        }
        return res.status(401).json({
          error: "Email or password is incorrect",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const logout = (req, res, next) => {};

module.exports = {login, register, logout};
