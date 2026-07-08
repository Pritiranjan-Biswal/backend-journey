const mongoose = require("mongoose");

exports.connect = async () => {
    console.log("Mongo URI:", process.env.MONGODB_URL);

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ DB connected successfully");
    } catch (err) {
        console.log("❌ DB connection failed");
        console.error(err);
    }
};