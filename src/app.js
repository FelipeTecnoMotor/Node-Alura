import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'Erro de Conexão'));
db.once("open", () =>{
    console.log('Conexão feita com sucesso!');
})

const app = express();

app.use(express.json()) //Usado para interpretar a resposta em JSON.

const livros = [
    {id:1, "Titulo": "Senhor dos Aneis"},
    {id:2, "Titulo": "O Hobbit"},
    {id:3, "Titulo": "Casa do Código"}
]

//RETORNA APENAS UMA MENSAGEM AO ACESSAR A PAGINA PRINCIPAL.
app.get('/', (req,res) => {
    res.status(200).send('Curso de Node')
})

//GET QUE RETORNA TODOS OS LIVROS DA ARRAY 'livros'.
app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})

//GET QUE RETORNA O LIVRO COM O ID CORRESPONDENTE NO ARRAY 'livros'.
app.get('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

//POST QUE ADICIONA UM LIVRO NA ARRAY 'livros'
//PASSANDO COMO CORPO DA REQUISIÇÃO O 'id' e 'Titulo'.
app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(200).send('Livro cadastrado com sucesso!')
})

//PUT QUE ALTERA O TITULO DO LIVRO ATRAVÉS DO ID PASSADO NO CORPO DO ENDPOINT.
// EXEMPLO: 'http://localhost:3000/1
app.put('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    livros[index].Titulo = req.body.Titulo;
    res.json(livros);
})

//DELETE QUE EXCLUI O LIVRO DO ARRAY 'livros' ATRAVÉS DO ID CORRESPONDENTE.
app.delete('/livros/:id', (req,res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} excluido com sucesso!`);
})

//FUNÇÃO QUE BUSCA O LIVRO ATRAVÉS DO ID CORRESPONDENTE DA ARRAY 'livros'.
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app