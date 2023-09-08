
import 'bootstrap/dist/css/bootstrap.css';
import { collection, getDocs } from "firebase/firestore"; // Firestore
import { db } from '../components/auth/firebase'; // Firestore

import './MainNews.css'
import { useEffect } from 'react';

function MainNews() {

   useEffect(() => {
      const getPosts = async () => {
         const querySnapshot = await getDocs(collection(db, "postagens"));
         querySnapshot.forEach((doc) => {
         console.log(`${doc.id} => ${doc.data()}`);
      })
      }
      getPosts();
   }, []);

   return (
      <>
         <div className="MainContent">

            <div className="MainPosts">
            
            </div>

            <aside>
               {/* Twitter component feed */}
            </aside>

         </div>
      </>
   )
}

export default MainNews