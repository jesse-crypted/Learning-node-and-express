const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    // home page
    case "/":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.end(`<h1>Home page</h1>`);
      break;

    // CONTACT Page
    case "/contact":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.end(`<h1>Contact page</h1>`);
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
