import React from "react";//importante sempre importar o react 
import '../App.css';//importando css

import AnimationTrabalho from './animation/AnimationTrabalho.jsx';

export default function Titulos  () {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim

     <>

     <div>

     <br />
     <br />
     <br />

     </div>
    
        <p className="fs-1 text-center text-white texTo">Trabalhos Recentes</p>
        <div className="position-absolute  start-50 translate-middle-x"><AnimationTrabalho/></div>

        <div>

         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />

        </div>

        
        
    </>
        
    )
    
}