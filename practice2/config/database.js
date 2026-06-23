const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("DB connected successfully");
        console.log("Database Name:", mongoose.connection.db.databaseName);
    })
    .catch((error) => {
        console.log("DB is facing error");
        console.log(error);
        process.exit(1);
    });
};

module.exports = connectWithDb;