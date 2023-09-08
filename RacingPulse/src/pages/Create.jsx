import { useState } from 'react';
import './Create.css';
import Header from '../components/HeaderComponent/Header';
import TextField from '@mui/material/TextField';
import { db } from '../components/auth/firebase';
import { collection, addDoc } from "firebase/firestore";


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

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const docRef = await addDoc(collection(db, "postagens"), {
            titulo: postagem.titulo,
            conteudo: postagem.conteudo,
            autor: postagem.autor,
            tags: postagem.tags,
         });

         setPostagem({
            titulo: "",
            conteudo: "",
            autor: "",
            tags: [],
         });

         console.log("Documento adicionado com a ID: ", docRef.id);
      } catch (e) {
         console.error("Error adding document: ", e);
      }
   };


   /* Draft.js */

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