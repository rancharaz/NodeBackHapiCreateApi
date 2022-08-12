//this is where you filter data from id
import Boom from '@hapi/boom';
import { db } from '../database';


export const getListingRoute = {
        //getting the data by id
        method: 'GET',
        path: '/api/listings/{id}',
        handler: async (req, h) => {
            const id = req.params.id;
            const {results}  = await db.query(
                'SELECT * FROM listings WHERE id=?',
                [id]
            );
            const listing = results[0];
            //handing errors 
            if(!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);
            return listing;
        }
}