const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "postgres", "11052001", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const connectDB = async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
