import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.port || 3000

app.use(express.json());
app.use(cors())

let todos = [];

app.get('/todos', (req, res) => {
    res.send({
        message:'Hello World',
        data:todos,
    })
})
app.post('/item', (req, res) => {
    todos.push(req.body.text)

    res.send({
        message:'Hello World',
        data:todos,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})