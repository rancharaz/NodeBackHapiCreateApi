//logic setting database connection
import mysql from 'mysql'
 

const connection = mysql.createConnection({
    //database creds
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'buy_and_sell'
});

export const db = {
    //connection to database logic
    connect: () => connection.connect(),
    query: (queryString, escapedValues ) => 
    new Promise((resolve, reject) => {
        connection.query(queryString, escapedValues, (error, results, fields) => {
            if(error) reject(error);
            resolve({results, fields});
        })
    }),
    end: () => connection.end()
}
