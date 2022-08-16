import { v4 as uuid } from "uuid";
import { db } from "../database";

//create new listings posting new listings
//npm i uuid to initiate unique id to each user

export const createNewListingRoute = {
    method: "POST",
    path: '/api/listings',
    handler: async(req, h) =>{

        const id = uuid();

        const {name = '', description='', price = '0'} = req.payload;

        const userId = '12345';
        const user_views = 0;

        await db.query(`
        INSERT INTO listings (id, name, description, price, user_id, user_views)
          VALUES (?, ?, ?, ?, ?, ?);
    `,
        [id, name, description, price, userId, user_views]
    );
            return { id, name, description, price, user_id: userId, user_views };
        }
}