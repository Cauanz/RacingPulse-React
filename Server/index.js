const express = require('express')
const app = express();
const port = 3002;
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(
   express.urlencoded({
      extended: true,
   }),
)  

const PostRoute = require('./routes/PostRoute')

const DB_USER = 'CAUANZ'
const DB_PASSWORD = encodeURIComponent('BeYRJz4GKMWs4Pvn')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.px29j1j.mongodb.net/?retryWrites=true&w=majority`)
   .then(
      app.listen(port, () => {
         console.log(`SERVER ON e ouvindo na porta ${port}`)
         console.log('Conexão bem sucedida com MONGODB')
      })
   ).catch (err => {
      console.log('Ocorreu um erro ao conectar, o APP não está ouvindo em lugar nenhum', err)
   })


app.use('/api', PostRoute)

app.get('/getText', (req, res) => {
   res.status(200).json({message: 'Estou aqui, funciona!'})
})