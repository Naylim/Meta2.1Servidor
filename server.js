const http = require('http');
const puerto = 4000;
const archivos = require('fs');
//se crea el servidor
http.createServer((req, res) => {
    //Se obtiene el metodo
    var metodo = req.method;
    switch (metodo) {
        case 'GET':
            res.writeHead(200, { 'content-type': 'text/html' });
            archivos.createReadStream('./index.html', 'UTF-8').pipe(res);
            break;
        case 'POST':
            let datos = '';
            req.on('data', dataInfo => { datos += dataInfo; })
            req.on('end', () => {
                res.writeHead(200, {
                    "Content-Type":
                        "text/html"
                });
                res.end(
                    //respuesta obtenida
                    `<body>
                        <h1 style="color:rgb(120,10,150)">Request Headers</h1>
                        <pre style="color:rgb(0,0,0)">${JSON.stringify(req.headers, undefined, 3)}</pre>
                        <h1 style="color:rgb(120,10,150)">Metodo: <spanstyle="color:rgb(120,10,150)">${req.method}</span></h1>
                        <h1 style="color:rgb(120,10,150)">URL: <spanstyle=>${req.url}</span></h1>
                        <h1 style="color:rgb(120,10,150)">Datos enviados: <spanstyle=>${datos}</span></h1>`
                );
            });
            break;
    }
}).listen(puerto, (err) => {
    //abre el puerto e inicia el servidor
    if (err) {
        console.log("Error: ", err);
        return;
    } else {
        console.log("Servidor Iniciado");
    }
})