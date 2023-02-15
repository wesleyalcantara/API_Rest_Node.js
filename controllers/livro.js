const {getTodosLivros, getLivroPorId, insereLivro, editaLivro, deletaLivroPorId} = require("../services/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id) && getLivroPorId(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("Id inválido.")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try{
        const livroNovo = req.body
        if(req.body.nome && req.body.id) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso.")
        }else{
            res.status(422)
            res.send("Os campos nome e id são obrigatórios.")
        }
    }catch(error) {
        res.status(500)
        res.send(message.error)
    }
}

function pathLivro (req, res) {
    try{
        const id = req.params.id

        if(id && Number(id) && getLivroPorId(id)) {
            const body = req.body
            editaLivro(body, id)
            res.send("Livro editado com sucesso.")
        }else{
            res.status(422)
            res.send("Id inválido.")
        }
    }catch(error) {
        res.status(500)
        res.send(message.error)
    }
}

function deleteLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id) && getLivroPorId(id)) {
            deletaLivroPorId(id)
            res.send("Livro deletado com sucesso.")
        }else{
            res.status(422)
            res.send("Id inválido.")
        }
    }catch(error) {
        res.status(500)
        res.send(message.error)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    pathLivro,
    deleteLivro
}