const express = require("express")
const rotaLivro = require("./routes/livro")

const app = express()
app.use(express.json())

app.use('/livros', rotaLivro)

app.use('/livros/:id', rotaLivro)

app.use('/', rotaLivro)

const port = 8000


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})