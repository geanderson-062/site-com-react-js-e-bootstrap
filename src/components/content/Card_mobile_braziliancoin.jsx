import React from "react";//importante sempre importar o react 
import '../../App.css';//importando o css

import img from '../../assets/img/bitcoin.png';//importando a imagem

export default function Braziliancoin () {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim

     <>

<a href="https://github.com/geanderson-062/app-BrazilianCoin-react-native">
  <div className="col CardAnimado">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Braziliancoin</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

    </>
        
    )
    
}