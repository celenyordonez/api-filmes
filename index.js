const express = require("express")
const app = express()

app.use(express.json())

const filmes = [
    {
        id: 1,
        descricao: "O Agente Secreto é um thriller político ambientado na ditadura militar brasileira...",
        titulo: "Agente Secreto",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/6/60/O_Agente_Secreto_%28Cartaz_brasileiro%29.jpg/330px-O_Agente_Secreto_%28Cartaz_brasileiro%29.jpg",
        genero: "Ação",
        anoLancamento: "2025"
    }
]



// mostrar todos os filmes

// buscar filme por genero
app.get("/filmes", (req, res) => {

    const genero = req.params.genero

    if (!genero) {
        return res.json(filmes)
    } else {
        res.status(404).json("Filme não encontrado")
    }


    const filmeFiltrado = filmes.filter(a =>
        a.genero.toLowerCase() === genero.toLowerCase()
    )

    res.json(filmeFiltrado)
})
//Filtro por id
app.get("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const filme = filmes.find(f => f.id === id)

    if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado" })
    }
    return res.json(filme)
})

//Criar um novo filme
app.post("/filmes", (req, res) => {

    const descricaoCliente = req.body.descricao
    const tituloQueVeioDoCliente = req.body.titulo
    const imageQueVeioDoCliente = req.body.image
    const generoQueVeioDoCliente = req.body.genero
    const anoLancamentoQueVeioDoCliente = req.body.anoLancamento

    if ( !descricaoCliente ||  !tituloQueVeioDoCliente || !imageQueVeioDoCliente || !generoQueVeioDoCliente || !anoLancamentoQueVeioDoCliente) {
        return res.status(400).json({ erro: "Todos os requisitos são obrigatórios!!" })
    } 
     if (title.length < 2) {
        return res.status(400).json({ error: "O título deve ter mais de 1 caractere" })
    }

    //Criando um  objeto novo com as informações, que veio do cliente 
    const novoFilme = {
        id: 2,
        descricao: descricaoCliente,
        titulo: tituloQueVeioDoCliente,
        image: imageQueVeioDoCliente,
        genero: generoQueVeioDoCliente,
        anoLancamento: anoLancamentoQueVeioDoCliente
    }
    filmes.push(novoFilme)
    res.status(201).send()
}
)

const series = [
    {
        id: 1,
        descricao: "Baseada no best-seller de Raphael Montes, a trama acompanha Téo, um jovem estudante de medicina solitário que desenvolve uma obsessão doentia por Clarice. Ao ser rejeitado, ele a sequestra e inicia uma viagem perturbadora, tentando convencê-la de que foram feitos um para o outro em um cenário de horror psicológico.",
        titulo: "Dias Perfeitos",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a2/Capa_Dias_Perfeitos_Raphael_Montes.jpg",
        genero: "Suspense",
        anoLancamento: "2024"
    }
]

app.get("/series", (req, res) => {
    const { genero } = req.query
    if (genero) {
        return res.json(series.filter(s => s.genero() === genero()))
    }
    return res.json(series)
})
//por id
app.get("/series/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const serie = series.find(s => s.id === id)

    if (!serie) {
        return res.status(404).json({ error: "Série não encontrada" })
    }
    return res.json(serie)
})

app.post("/series", (req, res) => {
     const descricaoCliente = req.body.descricao
     const tituloDoCliente = req.body.titulo
     const imageQueVeioDoCliente = req.body.image
     const generoQueVeioDoCliente = req.body.genero
     const anoLancamentoQueVeioDoCliente = req.body.anoLancamento
    
     if (!descricaoCliente || !tituloDoCliente || !imageQueVeioDoCliente || !generoQueVeioDoCliente || !anoLancamentoQueVeioDoCliente) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" })
    }
    if (tituloDoCliente.length < 2) {
        return res.status(400).json({ error: "O título deve ter mais de 1 caractere" })
    }
    
    const novaSerie = {
        id:2,
        descricao: descricaoCliente,
        titulo: tituloDoCliente,
        image: imageQueVeioDoCliente,
        genero: generoQueVeioDoCliente,
        anoLancamento: anoLancamentoQueVeioDoCliente
    }

    series.push(novaSerie)
    return res.status(201).json(novaSerie)
})
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
