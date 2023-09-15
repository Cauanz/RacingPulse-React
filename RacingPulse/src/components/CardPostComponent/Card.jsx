/* eslint-disable react/prop-types */
import './Card.css'


function Card( props ) {

   return (
      <a href="#" className='cardLink'>
         <div className="card">
            <div className="cardBody">
                  <img src={props.imagem} alt={props.nome} />
                  <div className="overlay">
                     <p className='text'>{props.nome}</p>
                  </div>
            </div>
         </div>
      </a>
   )
}

export default Card;