require('http').createServer((req, res) => {
  res.end('Hello World\n')
}).listen(process.env.PORT)