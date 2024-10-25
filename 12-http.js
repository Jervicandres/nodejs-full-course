const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end("Welcome to our home page");
    }
    else if(request.url === "/about") {
        response.end("Here is our short history");
    }
    else {
        response.end(`
            <h1>Ooops!</h1>
            <p>Page not found</p>
            <a href="/">Go back</a>
            `);
    }
    });

server.listen(5000);