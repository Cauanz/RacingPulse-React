const mongoose = require('mongoose')

const postagem = mongoose.model('postagem', {
   titulo: String,
   conteudo: String,
   autor: String
})

module.exports = postagem