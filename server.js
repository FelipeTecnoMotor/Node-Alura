import app from './src/app.js'
//const http = require("http")
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Servidor escutando na porta:${port}`)
})


/* METODO HTTP PURO DE REQUISIÇÃO
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Entrei na pag da Editora',
    '/sobre': 'Info sobre o projeto'
}
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
*/