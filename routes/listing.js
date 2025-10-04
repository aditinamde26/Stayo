const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router
    .route("/")
    .get(wrapAsync(listingController.index)) //index: show all listings
    .post(
        isLoggedIn, 
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.createListing)
    ); //create listing


//Create: New & Create Route
router.get("/new", isLoggedIn,listingController.renderNewForm );

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing)) //show specific listing
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing)
    ) //update specific listing
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    ); //delete specific listing


//Edit Route
router.get(
    "/:id/edit", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;