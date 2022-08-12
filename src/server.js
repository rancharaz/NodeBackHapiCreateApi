import Hapi from '@hapi/hapi';
import routes from './routes';

const start = async() => {
    //creating server: host and port
    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    //running the server by the route
    routes.forEach(route => server.route(route))

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`)
}
//error handling
process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1)
})
start(); 