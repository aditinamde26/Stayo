const mongoose = require("mongoose");
const Listing = require("../models/listing.js"); // path to your listing model
require("dotenv").config();

async function addOwner() {
    await mongoose.connect(process.env.ATLASDB_URL);

    const ownerId = "68e289296f441d41c8c428c0"; // your user _id

    await Listing.updateMany(
        { owner: { $exists: false } }, // only listings without owner
        { $set: { owner: ownerId } }
    );

    console.log("Owner added to all listings");
    mongoose.connection.close();
}

addOwner();
