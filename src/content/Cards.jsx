import React from "react";
import '../App.css';

//importando as imagens
import img1 from '../assets/img/adotpet.png';
import img2 from '../assets/img/code.png';
import img3 from '../assets/img/js.png';
import img4 from '../assets/img/cinema.png';
import img5 from '../assets/img/player.png';
import img6 from '../assets/img/livros.png';
import img7 from '../assets/img/info.png';
import img8 from '../assets/img/cv.png';
import img9 from '../assets/img/tempo.png';

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

<div className="row row-cols-1 row-cols-md-3 g-4 Cards">

<a href="https://adotpet.org/index.html">
  <div className="col">
    <div className="card">
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Adotpet</h5>
      </div>
    </div>
  </div>
</a>

<a href="https://g-code-editor.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">G-code-editor</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://js-servicos-gerais.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">JS serviços-gerais</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://cinema-extremo-lite.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Cinema Extremo</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://gf-player.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">GF player</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://gf-livros.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img6} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">GF Livros</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://default-info.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img7} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Default info</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://geanderson-cv.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img8} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">CV online</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

<a href="https://tempo-agora.netlify.app/">
  <div className="col">
    <div className="card">
      <img src={img9} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-dark">Tempo Agora</h5>
        <p className="card-text text-dark"></p>
      </div>
    </div>
  </div>
</a>

</div>

</section>

<br />
<br />
<br />   
<br />
<br />
<br />  

    </>
        
    )
    
}