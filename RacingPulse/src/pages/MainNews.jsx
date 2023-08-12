import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'

import './MainNews.css'

function MainNews() {

   const [newsData, setNewsData] = useState([])

   useEffect(() => {
      const apiKey = '513256ea2ffa420db6f6b010ab95a748';
      const searchTerm = 'motorsport';
      /* const language = 'pt'; */
      /* const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&language=${language}&apiKey=${apiKey}`; */
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=pt&q=${searchTerm}&apiKey=${apiKey}`;

      axios.get(apiUrl)
      .then(response => {
         /* setNewsData(response.data.articles); */
         setNewsData(response.data.articles.slice(0, 5));
      })
      .catch(error => {
         console.error('Erro ao buscar notícias:', error);
      });
   }, []);

/*    const firstNews = newsData[0]; */

   return (
      <div className="MainNewsContainer">
         <div className="LeftContainer">
            {/* {firstNews && (
                  <div className="news-card">
                     {firstNews.urlToImage && <img src={firstNews.urlToImage} alt={firstNews.title} />}
                     <h2>{firstNews.title}</h2>
                     <p>{firstNews.description}</p>
                     <p>Fonte: {firstNews.source.name}</p>
                  </div>
            )} */}
            <Carousel>
               {newsData.map((newsItem, index) => (
                  <Carousel.Item key={index}>
                     <div className="news-card">
                     {newsItem.urlToImage && <img src={newsItem.urlToImage} alt={newsItem.title} />}
                     <h2>{newsItem.title}</h2>
                     <p>{newsItem.description}</p>
                     <p>Fonte: {newsItem.source.name}</p>
                     </div>
                  </Carousel.Item>
               ))}
            </Carousel>
         </div>
         <div className="RightTopContainer">
         <div className="RightTopLeftContainer">Right Top Left</div>
         <div className="RightTopMidContainer">Right Top Mid</div>
         <div className="RightTopRightContainer">Right Top Right</div>
         </div>
         <div className="RightBottomContainer">Right Bottom</div>
      </div>
   )
}

export default MainNews