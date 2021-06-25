import http from 'http'
const server = http.createServer()

const port = 8080

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('hello world')
    console.log(`a User Connected.`)
    res.end()
});

server.listen(port, () => {
  console.log(`Server running at PORT:${port}`)
})