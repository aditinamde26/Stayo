const mongoose = require("mongoose");
require("dotenv").config();
const Listing = require("../models/listing.js");

async function main() {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("Connected to MongoDB Atlas");

        // Use your admin user's _id
        const adminUserId = "68e28fdbd562c475c9858033";

        const allListings = await Listing.find({});
        for (let listing of allListings) {
            listing.owner = new mongoose.Types.ObjectId(adminUserId);
            await listing.save();
        }

        console.log("✅ Owner added to all listings");

    } catch (err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}

main();
