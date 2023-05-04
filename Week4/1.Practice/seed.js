const {User} = require("./models/index")
const seedData = require("./seedData");
const {sequelize} = require("./db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    await User.bulkCreate(seedData);
}

syncSeed()