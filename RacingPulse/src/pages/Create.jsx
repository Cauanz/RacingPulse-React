import { useState } from 'react';
import './Create.css';
import Header from '../components/HeaderComponent/Header';
import TextField from '@mui/material/TextField';
import { firebaseApp } from '../firebaseConfig';


function Create() {

   const [postagem, setPostagem] = useState({
      titulo: '',
      conteudo: '',
      autor: '',
      tags: [],
   });

   const handleInputChange = (e, campo) => {
      const { value } = e.target;
      setPostagem({ ...postagem, [campo]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      
      // Crie uma referência à coleção 'postagens' no Firestore
      const postagensCollection = firebaseApp.firestore().collection('postagens');
      
      // Adicione a postagem ao Firestore e obtenha a referência para o documento criado
      postagensCollection
         .add(postagem)
         .then((docRef) => {
            console.log('Postagem adicionada com ID: ', docRef.id);
      
            // Limpar o formulário ou redirecionar para a página de sucesso, se necessário
            setPostagem({
            titulo: '',
            conteudo: '',
            autor: '',
            tags: [],
            });
         })
         .catch((error) => {
            console.error('Erro ao adicionar postagem: ', error);
         });
   };

return (
   <>
      <Header />
      <div className="CreateContainer">
         <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Título:</label>
            <TextField
            required
            id="outlined-required"
            value={postagem.titulo}
            onChange={(e) => handleInputChange(e, 'titulo')}
            />
   
            <label htmlFor="conteudo">Conteúdo:</label>
            <TextField
               required
               id="outlined-multiline"
               value={postagem.conteudo}
               onChange={(e) => handleInputChange(e, 'conteudo')}
               multiline
               rows={5}
            />
   
            <label htmlFor="autor">Autor:</label>
            <TextField
            required
            id="outlined-required"
            value={postagem.autor}
            onChange={(e) => handleInputChange(e, 'autor')}
            />
   
            <button type="submit">Enviar</button>
         </form>
      </div>
   </>
   );
}

export default Create;