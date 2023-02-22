const authRouter = require("./authRouter");

const routers = function (app) {
  app.use("/api", authRouter);
};

module.exports = routers;
