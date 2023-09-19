const http = require('http');
const puerto = 4000;
http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(`<body >
            <h1 style="color:rgb(120,10,150)">Request Headers</h1>
            <pre style=>${JSON.stringify(req.headers, undefined, 3)}</pre>
            <h1 style="color:rgb(120,10,150)">Metodo: <span style=>${req.method}</span></h1>
            <h1 style="color:rgb(120,10,150)">URL: <spanstyle=>${req.url}</span></h1>`);
}).listen(puerto, (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  } else {
    console.log("Servidor Iniciado");
  }
})