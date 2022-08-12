//here we add views to db with post

import { db } from "../database";

export const addViewTolistingRoute = {
    method: 'POST',
    path: '/api/listing/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id;

        await db.query(
            'UPDATE listings SET views=views+1 WHERE id=?',
            [id],
        );
        const {results} = await db.query(
            'SELECT * FROM LISTING WHERE id=?',
            [id]
        );
        const updatedLinsting = results[0];
        return updatedLinsting;
    }
}