const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Welcome to Home page`);
  } else if (req.url === "/about") {
    res.end(`Welcome to About page`);
  } else {
    res.end(`<h1>Oops 404 Error</h1>
  <p>We cant seem to get that page. </p>
  <a href="/">back home. </a>`);
  }
});

server.listen(5000, () => {
  console.log(`...server fm`);
});
