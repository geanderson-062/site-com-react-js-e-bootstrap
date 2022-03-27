import React from "react";//importante sempre importar o react 
import '../../App.css';//importando o css

import img7 from '../../assets/img/info.png';//importando a imagem

export default function Default  () {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim

     <>

<a href="https://default-info.netlify.app/">
  <div className="col CardAnimado">
    <div className="card">
      <img src={img7} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Default info</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

    </>
        
    )
    
}