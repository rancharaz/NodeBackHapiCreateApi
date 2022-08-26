import Hapi, { server } from '@hapi/hapi';
import routes from './routes';
import { db } from './database';
/* import * as admin from 'firebase-admin'
import credentials from '../credentials.json'
 */
/* admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
 */

const start = async() => {
    //creating server: host and port
     const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    //running the server by the route
    routes.forEach(route => server.route(route))

    db.connect(); //connect server

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`)
}
//error handling
process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})
//stop server
process.on('SIGINT', async () => {
    console.log('Stopping server...')
    await server.stop({ timeout: 10000});

    db.end();
    console.log('Server stopped');
    process.exit(0);
})
start(); 