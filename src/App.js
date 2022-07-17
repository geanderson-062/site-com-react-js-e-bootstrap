//aqui criamos importamos os componentes que criamos e o conteudo 
//para a tag devemos importar o jsx e definir um nome e indicar com o from o caminho do componente criado 

//importando componentes
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 
import Titulos from './components/Titulos.jsx';
import Cards from './components/Cards.jsx';
import Contato from './components/Contato.jsx';
import Descricao from './components/Descricao.jsx';
import Banner from './components/Banner.jsx'; 

//import Animacões / a animação 1 está sendo chamada dentro do banner / animação trabalho está no titulo 1 
import Animacao2 from './components/animation/Animation_2.jsx';
import Animacao3 from './components/animation/Animation_3.jsx';

//importando css
import './App.css'; 

function App() {

  return (
      <>
             
      {/* aqui juntamos todos os componentes de nosso sistema devemos usar sempre <> </> antes de digitar o codigo*/}

        <Navbar/>  
       
        <Banner/>

        <Descricao/>
        
        <Animacao2/>

        <Titulos/>

        <Cards/>

        <Contato/>

        <Animacao3/>
    
        <Footer />
             
      </>
  );
}

export default App;

