import { useState } from 'react';
import './Create.css';
import Header from '../components/HeaderComponent/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



function Create() {
   const navigate = useNavigate();
   const [conteudo, setConteudo] = useState('');
   const [titulo, setTitulo] = useState('');
   const [autor, setAutor] = useState('');

/*    console.log(conteudo, titulo, autor) */ // Para DEBUG


   const handleSubmit = async (e) => {
      e.preventDefault();

      const postagem = {
         titulo,
         conteudo,
         autor
      }


      /* Código do MONGODB para enviar os dados */

      // eslint-disable-next-line no-undef
      axios.post('http://localhost:3002/CreatePost', postagem)
         .then((res) => {
            console.log(res.status);
            console.log(res.data); 
            navigate('/')
         }).catch (err => {
            console.log('ocorreu um erro', err)
         })
   };


return (
   <>
      <Header />
      <div className="CreateContainer">
      <form onSubmit={handleSubmit}>
      <label htmlFor="titulo">Título:</label>

      <TextField
         required
         id="outline-required"
         value={titulo}
         onChange={(e) => { setTitulo(e.target.value)}}
         />

      <label htmlFor="conteudo">Conteúdo:</label>

      
      <TextField
         required
         id="outline-required"
         value={conteudo}
         onChange={(e) => { setConteudo(e.target.value)}}
         />


      <label htmlFor="autor">Autor:</label>
      <TextField
         required
         id="outlined-required"
         value={autor}
         onChange={(e) => { setAutor(e.target.value)}}
      />

      <Button variant="contained" color="primary" type="submit">Enviar</Button>
      </form>
   </div>
   </>
   );
}

export default Create;