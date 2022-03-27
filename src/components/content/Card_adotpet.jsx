import React from "react";//importante sempre importar o react 
import '../../App.css';//importando o css

import img1 from '../../assets/img/adotpet.png'; //importando a imagem

export default function Adotpet  () {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim

     <>

<a href="https://adotpet.org/index.html">
  <div className="col CardAnimado">
    <div className="card">
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Adotpet</h5>
      </div>
    </div>
  </div>
</a>

    </>
        
    )
    
}