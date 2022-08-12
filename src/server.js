import Hapi from '@hapi/hapi';


const start = async() => {
    //creating server: host and port
    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });
    //creating endpoint
    server.route({
        method: "GET",
        path: '/hello',
        handler: (req, h) => {
            // returned request
            return 'Hello world';
            //return h.response('hello').code(201)
        }
    })

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`)
}
//error handling
process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1)
})
start(); 