import React from "react";//importante sempre importar o react 
import '../../App.css';//importando o css

import img8 from '../../assets/img/cv.png';//importando a imagem

export default function Curriculo  () {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim

     <>

<a href="https://geanderson-cv.netlify.app/">
  <div className="col CardAnimado">
    <div className="card">
      <img src={img8} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">CV online</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

    </>
        
    )
    
}