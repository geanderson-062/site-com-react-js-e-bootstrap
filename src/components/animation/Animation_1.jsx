import React from "react";//importante sempre importar o react 
import "@lottiefiles/lottie-player";
import '../../App.css';
export default function Animacao1() {

//devemos sempre exportar a função como padrão e dar um nome para ela 


    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim
     <>

<lottie-player className="Animacao"
  autoplay
//  controls
  loop
  mode="normal"
  src="https://assets2.lottiefiles.com/packages/lf20_imrozgtu.json"
  style={{ width: "450px", height: "450px"}}
>
</lottie-player>

    </>
        
    )
    
}