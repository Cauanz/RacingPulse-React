
import 'bootstrap/dist/css/bootstrap.css';

import './MainNews.css'
/* import { useEffect, useState } from 'react'; */
import Card from '../components/CardPostComponent/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarsData from '../assets/CarsData.json';
import { PostsComponent } from '../components/PostsComponent/PostsComponent';


import axios from 'axios';
import { useEffect, useState } from 'react';

function MainNews() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {

      const GetPosts = () => {
         axios.get('http://localhost:3002/GetPost')
            .then((response) => {
               setPosts(response.data)
            })
            .catch((err) => {
               console.error(`Ocorreu um erro ao tentar exibir todos os usuarios: ${err}`);
            })
      };


      GetPosts()
   }, [])

   console.log(posts)

   return (
      <>
         <div className="MainContent">

            <div className="MainPage">
               <img src="./porsche-movimento.jpg" alt="" />
               <h1>Sinta a potência, viva a velocidade.</h1>
               <h3>Porsche 911</h3>
            </div>

         <div className="CatalogoCarrosel">
            <h1>Catálogo</h1>
            
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
               {CarsData.map((car, index) => (
                     <Card key={index} nome={car.nome} imagem={car.imagem} />
                  )
               )}
            </Carousel>
         </div>


         <div className="MarcasCarrosel">
            <h1>Marcas</h1>
            
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
               <Card nome='Mercedes AMG GT' imagem='./Mercedes Benz.png' />
               <Card nome='Mercedes AMG GT' imagem='./Dodge.png' />
               <Card nome='Mercedes AMG GT' imagem='./Ferrari.png' />
               <Card nome='Mercedes AMG GT' imagem='./Nissan.png' />
               <Card nome='Mercedes AMG GT' imagem='./Porsche.png' />
               <Card nome='Mercedes AMG GT' imagem='./Toyota.png' />
            </Carousel>
         </div>



         <div className="Posts">
            <h1>Posts</h1>
            {posts.map((post, index) => (
               <PostsComponent 
                  key={index}
                  titulo={post.titulo}
                  conteudo={post.conteudo}
                  autor={post.autor}
               />
            ))}
         </div>

         <div className="footer">
            <ul>
               <li><a href="#">Sobre</a></li>
               <li><a href="#">Contato</a></li>
               <li><a href="#">Termos de uso</a></li>
               <li><a href="#">Política de privacidade</a></li>
            </ul>
            <p>Uma plataforma para os amantes de carros.</p>
            <p>© 2023 Racing Pulse</p>
         </div>
         </div>
      </>
   )
}

export default MainNews