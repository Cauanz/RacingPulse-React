
import 'bootstrap/dist/css/bootstrap.css';
import { collection, getDocs } from "firebase/firestore"; // Firestore
import { db } from '../components/auth/firebase'; // Firestore

import './MainNews.css'
import { useEffect, useState } from 'react';
import Card from '../components/CardPostComponent/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            
            <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
               desktop: {
                  breakpoint: {
                  max: 3000,
                  min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
               },
               mobile: {
                  breakpoint: {
                  max: 464,
                  min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
               },
               tablet: {
                  breakpoint: {
                  max: 1024,
                  min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
               }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
               <Card nome='Mercedes AMG GT' imagem='./MercedesAMG-GT.jpg' />
               
               <Card nome='Ferrari F40' imagem='./ferrariF40.jpg' />

               <Card nome='DODGE Charger R/T' imagem='./DODGE CHARGER R T.jpg' />

               <Card nome='Nissan GTR 2020 NISMO' imagem='./NISSAN GTR 2020 NISMO.jpg' />
            </Carousel>
         </div>
         </div>
      </>
   )
}

export default MainNews