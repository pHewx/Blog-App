const jwt = require("jsonwebtoken");
const db = require("../models");

const LoginSuccess = async function (req, res, next) {
  console.log(req.body);

  const { id } = req?.body;

  try {
    if (!id) {
      res.status(400).json({
        code: 400,
        message: "Missing inputs",
      });
      return;
    }

    if (typeof id !== "string") {
      res.status(400).json({
        code: 400,
        message: "Type is not correct",
      });
      return;
    }

    const response = await db.User.findOne({
      where: {
        id: req.body.id,
      },
    });

    if (!response) {
      res.status(500).json({
        code: 500,
        message: "User is not found",
      });
      return;
    }

    const token = jwt.sign({ id: response.id }, process.env.SERCRETKEY);

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "fail at authController",
    });
  }
};

module.exports = LoginSuccess;
