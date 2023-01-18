const db = require("../config/connection");
const { Helper, User } = require("../models");
const userSeeds = require("./users.json");
const helperSeeds = require("./helpers.json");

db.once("open", async () => {
    try {
    await Helper.deleteMany({});
    await Helper.create(helperSeeds);
    await User.deleteMany({})
    await User.create(userSeeds);

    console.log("Successfully seeded!");
    process.exit(0);
    } catch (err)  {
        console.log(err);
    }
})