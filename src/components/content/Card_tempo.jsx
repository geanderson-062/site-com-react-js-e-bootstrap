import React from "react";//importante sempre importar o react 
import '../../App.css';//importando o css

import img9 from '../../assets/img/tempo.png';//importando a imagem

export default function Tempo  () {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim

     <>

<a href="https://tempo-agora.netlify.app/">
  <div className="col CardAnimado">
    <div className="card">
      <img src={img9} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Tempo Agora</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

    </>
        
    )
    
}