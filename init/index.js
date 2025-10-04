const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

main()
.then((res)=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    const dataWithOwner = initData.data.map((obj) => ({
        ...obj,
        owner: new mongoose.Types.ObjectId("68d2a5b65cc1e85e5c4fea28")
    }));
    await Listing.insertMany(dataWithOwner);
    console.log("Data was initialized");
};


initDB();