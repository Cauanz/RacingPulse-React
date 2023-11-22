const router = require('express').Router()

const Postagem = require('../models/Postagem')


// Criar post
router.post('/CreatePost', async (req, res) => {

   const { titulo, conteudo, autor } = req.body

   if(!titulo) {
      return res.status(422).json({ error:'Titulo, conteúdo e autor obrigatório!'})
   }

   const postagem = {
      titulo,
      conteudo,
      autor
   }

   try {
      await Postagem.create(postagem)

      res.status(201).json({ message: 'Postagem criada com sucesso! 😀'})
   }
   catch (error) {
      res.status(500).json({'An error ocurred 😢': error})
   }
})

module.exports = router