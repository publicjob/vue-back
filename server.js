const http = require('http')
const users = [
  {
    id: 1,
    name:'worker1'
  },{
    id: 2,
    name: 'worker2'
  },{
    id: 3,
    name: 'worker3'
  }
]

const server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if(req.url === '/user') {
    res.end(JSON.stringify(users))
  }else{
    res.end('not found')
  }
})

server.listen(3000, () => console.log('server在3000端口中监听...'))