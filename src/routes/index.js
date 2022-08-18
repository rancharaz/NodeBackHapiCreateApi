import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { updateListingRoute} from "./updateListing";

export default [
    //inserting the variable[queries] to export to the server
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
]