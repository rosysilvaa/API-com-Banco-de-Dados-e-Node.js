import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status (200).json(users)

})


app.listen(3000)

/*
   Criar nossa API de Usuários

   - Criar um usuário
   -Listar todos os usuários
   - Editar um usuários
   -Deletar um usuários
roseanedasilva202030_db_user/  Kid2HICF8J8GzWB2
*/