import Boom from '@hapi/boom';
import { fakeListings } from "./fake-data";

export const getListingRoute = {
        //getting the data by id
        method: 'GET',
        path: '/api/listings/{id}',
        handler: (req, h) => {
            const id = req.params.id;
            const listing = fakeListings.find(listing => listing.id === id);
            //handing errors 
            if(!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);
            return listing;
        }
}