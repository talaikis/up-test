const http = require('http')
const PORT = 3000

http.createServer((req, res) => {
  res.end('Hello World from Node.js\n')
}).listen(PORT)
