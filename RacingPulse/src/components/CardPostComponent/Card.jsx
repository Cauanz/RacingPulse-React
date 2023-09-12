import './Card.css'


function Card({ title, content, author}) {

   return (
      <div className="card">
         <div className="card-header">
            <h2>{title}</h2>
         </div>
         <div className="card-body">
            <p>{content}</p>
         </div>
         <div className="card-footer">
            <p>{author}</p>
         </div>
      </div>
   )
}

export default Card;