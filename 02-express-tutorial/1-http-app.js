const http = require("http");
const { readFileSync } = require("fs");

// Gett File
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  //   console.log(url);
  switch (url) {
    // home page
    case "/":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      // serve html page
      res.end(homePage);
      break;

    // CONTACT Page
    case "/contact":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.end(`<h1>Contact page</h1>`);
      break;

    // Styles
    case "/styles.css":
      res.writeHead(200, {
        "content-type": "text/css",
      });
      res.end(homeStyles);
      break;
    // Image/logo
    case "/logo.svg":
      res.writeHead(200, {
        "content-type": "image/svg+xml",
      });
      res.end(homeImage);
      break;
    // Logic
    case "/browser-app.js":
      res.writeHead(200, {
        "content-type": "text/javascript",
      });
      res.end(homeLogic);
      break;

    // 404 error
    default:
      res.writeHead(404, {
        "content-type": "text/html",
      });
      res.end(`<h1>404 Error: Page not found 🐱‍🏍</h1>`);
      break;
  }
});
server.listen(5000, () => {
  console.log(`server listening to port 5000 📢`);
});

//   console.log(req.method);
