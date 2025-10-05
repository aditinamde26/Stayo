// init/index.js
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
require("dotenv").config();

async function main() {
    try {
        await mongoose.connect(process.env.ATLASDB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB Atlas");

        // Clear existing listings
        await Listing.deleteMany({});
        console.log("🗑️  Cleared existing listings");

        // Add owner to all listings
        const ownerId = new mongoose.Types.ObjectId("68d2a5b65cc1e85e5c4fea28");
        const dataWithOwner = initData.data.map((obj) => ({
            ...obj,
            owner: ownerId,
        }));

        // Insert all listings
        await Listing.insertMany(dataWithOwner);
        console.log("✅ Data was initialized with owner");

    } catch (err) {
        console.error("❌ Error:", err);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log("🔒 Connection closed");
    }
}

// Run the seeding function
main();
