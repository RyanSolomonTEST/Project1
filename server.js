var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 
    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
    
    
    if(parsedUrl.path == '/listings'){
        response.writeHead(200);
        response.end(listingData);
    }
    else
    {
        response.writeHead(404);
        response.end("Bad gateway error")
    }
};

server = http.createServer(requestHandler);


fs.readFile('listings.json', 'utf8', function(err, data) {
            /*
             This callback function should save the data in the listingData variable,
             then start the server.
             */
            if(err){
            throw err;
            }
            
            listingData = data;
            server.listen(8080);
            console.log("Server listening on: http://localhost:" + port );
            
            });