import React from "react";//importante sempre importar o react 
import "@lottiefiles/lottie-player";
import '../../App.css';
export default function AnimationTrabalho() {

//devemos sempre exportar a função como padrão e dar um nome para ela 


    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim
     <>

<lottie-player 
  autoplay
//  controls
  loop
  mode="normal"
  src="https://assets2.lottiefiles.com/packages/lf20_u0sqq9uw.json"
  style={{ width: "200px", height: "200px"}}
>
</lottie-player>

    </>
        
    )
    
}