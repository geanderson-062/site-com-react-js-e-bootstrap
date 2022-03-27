import React from "react";
import '../App.css'; //importando o css

//importando os cards / transformamos os cards em jsx para que fique mais facil adcionar mais deles ou atualizalos 

import Adotpet from "./content/Card_adotpet";
import Code from "./content/Card_code";
import Js from "./content/Card_js";
import Cinema from "./content/Card_cinema";
import Player from "./content/Card_player";
import Livros from "./content/Card_livros";
import Default from "./content/Card_default";
import Curriculo from "./content/Card_curriculo";
import Tempo from "./content/Card_tempo";

export default function Cards() {

    return (
     <>

<br />
<br />
<br />
<br />
<br />
<br />   
<br />
<br />
<br />  

<section className="container">

<div className="row row-cols-1 row-cols-md-3 g-4 Cards"> {/*essa div centraliza os cards / o card escrito na classe e referente ao css*/}

  <Adotpet/>

  <Code/>

  <Js/>

  <Cinema/>

  <Player/>

  <Livros/>

  <Tempo/>

  <Default/>

  <Curriculo/>

</div>

</section>

<div>

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