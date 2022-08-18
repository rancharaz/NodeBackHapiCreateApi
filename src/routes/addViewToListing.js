import { db } from '../database';

export const addViewToListingRoute = {
    //posting data in add-view
    method: 'POST',
    path: '/api/listings/{id}/add-view/',
    handler: async (req, h) => { 
        //getting the id from the path
        const id = req.params.id;
        await db.query(
            'UPDATE listings SET user_views=user_views+1 WHERE id=?',
            [id],
        );
        const { results } = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id],
        );
        const updatedListing = results[0];
        return updatedListing;
    }
}