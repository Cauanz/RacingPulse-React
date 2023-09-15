
import 'bootstrap/dist/css/bootstrap.css';
import { collection, getDocs } from "firebase/firestore"; // Firestore
import { db } from '../components/auth/firebase'; // Firestore

import './MainNews.css'
import { useEffect, useState } from 'react';
import Card from '../components/CardPostComponent/Card';

function MainNews() {


   return (
      <>
         <div className="MainContent">

            <div className="MainPage">
               <img src="./porsche-movimento.jpg" alt="" />
               <h1>Sinta a potência, viva a velocidade.</h1>
               <h3>Porsche 911</h3>
            </div>

         <div className="Carrosel">
            <h1>Catalogo</h1>
            <Card nome='Mercedes AMG GT' imagem='./MercedesAMG-GT.jpg' />
            <Card nome='Ferrari F40' imagem='./ferrariF40.jpg' />
         </div>
         </div>
      </>
   )
}

export default MainNews