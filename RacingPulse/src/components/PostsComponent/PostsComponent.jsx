/* eslint-disable react/prop-types */
import './PostsComponent.css'


export function PostsComponent(props) {
   
   return (
      <>
         <div className="PostDiv">
            <h1>{props.titulo}</h1>
            <p>{props.conteudo}</p>
            <p><i>{props.autor}</i></p>
         </div>
      </>
   )
}