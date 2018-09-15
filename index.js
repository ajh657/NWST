var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile(DataServe(req.url, req.method), function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    
    res.end();
  });
}).listen(8080);

function DataServe(url, method) {
  url = url.substring(1);
  var DataLocation = url.split("/")
  console.log(DataLocation[0]);
  return DataFile(DataLocation[0], method);
}

function DataFile(Location, method) {
  switch (Location) {
    case "api":
      return api(Location, method);
      break;

    case "favicon.ico":
      return "./icons/Icon.ico";
      break;

    case "":
      return "./http/index.html";
      break;
  
    default:
      return "./http/404.html";
      break;
  }
}

function api(Location, method) {
  console.log(method);
  return "./api/index.html"; 
}