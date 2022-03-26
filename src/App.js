//aqui criamos importamos os componentes que criamos e o conteudo 
//para a tag devemos importar o jsx e definir um nome e indicar com o from o caminho do componente criado 

//importando componentes
import Navbar from './components/Navbar.jsx'; 
// import Banner from './components/Banner.jsx'; 
import Subnavbar from './components/Subnavbar.jsx';
import Footer from './components/Footer.jsx'; 

 //importando conteudo do content
import Titulo1 from './content/Titulo1.jsx';
import Cards from './content/Cards.jsx';
import Contato from './content/Contato.jsx';
import Descricao from './content/Descricao.jsx';

//import Animacao1 from './components/animation/Animation_1.jsx'; colocamos ela dentro de banner teste
import Animacao2 from './components/animation/Animation_2.jsx';
import Animacao3 from './components/animation/Animation_3.jsx';

import Banner from './components/Banner.jsx'; 

//importando css
import './App.css'; 

function App() {

  return (
      <>
        <Navbar/>  
       
        <Banner/>

        <Subnavbar/>

        {/*assim se colocar comentario dentro do jsx
        
        aqui colocamos as tags que criamos
        */}

        <Descricao/>
        
        <Animacao2/>

        <Titulo1/>

        <Cards/>

        <Contato/>

        <Animacao3/>
    
        <Footer />
        
      </>
  );
}

export default App;

