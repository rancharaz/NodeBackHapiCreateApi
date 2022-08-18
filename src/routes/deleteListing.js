import { db } from "../database";
// this file is for deleting an item by id
export const deleteListingRoute = {

    method: 'DELETE',
    path: '/api/listings/{id}/',
    
    handler: async(req, h) => {
        //getting the id on the path
        const {id} = req.params;
        await db.query(
            'DELETE FROM listings WHERE id=?',
            [id]
        );
        return { message: 'Success'}
    }
}