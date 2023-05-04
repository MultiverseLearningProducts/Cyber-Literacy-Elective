const Sequelize = require("sequelize");
const {sequelize} = require("../db");

const User = sequelize.define("user", {
    name: Sequelize.STRING,
    password: Sequelize.STRING
})

module.exports = {User};