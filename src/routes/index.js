import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
 import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";

export default [
    //inserting the variable[queries] to export to the server
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
     createNewListingRoute
]