import { db } from "../database";
//get listings from userId
export const getUserListingsRoute ={
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async(req, h) => {
        //getting the userId from the path
        const userId = req.params.userId;

        const {results} = await db.query(
            'SELECT  * FROM listings WHERE user_id=?',
            [userId]
        );
            return results;
    }
}