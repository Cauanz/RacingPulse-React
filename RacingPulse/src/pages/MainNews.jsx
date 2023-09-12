
import 'bootstrap/dist/css/bootstrap.css';
import { collection, getDocs } from "firebase/firestore"; // Firestore
import { db } from '../components/auth/firebase'; // Firestore

import './MainNews.css'
import { useEffect, useState } from 'react';
import Card from '../components/CardPostComponent/Card';

function MainNews() {

   const [posts, setPosts] = useState([]);

   useEffect(() => {

      const getPosts = async () => {
         try {
         const querySnapshot = await getDocs(collection(db, 'postagens'));
         const postArray = [];
         
         querySnapshot.forEach((doc) => {
            postArray.push({ id: doc.id, ...doc.data() });
         });

         console.log(postArray);
         setPosts(postArray);
         } catch (error) {
         console.error('Erro ao buscar posts:', error);
         }
      };

   const Interval = setInterval(() => {
      getPosts();         
   }, 10000);
   return () => clearInterval(Interval);
   }, []);

   return (
      <>
         <div className="MainContent">

            <div className="MainPosts">
            {posts.map((post) => (
               <Card key={post.id} title={post.titulo} content={post.conteudo} author={post.autor} />
            ))}
            </div>

            <aside>
               {/* Twitter component feed */}
            </aside>

         </div>
      </>
   )
}

export default MainNews