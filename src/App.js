//aqui criamos importamos os componentes que criamos e o conteudo 
//para a tag devemos importar o jsx e definir um nome e indicar com o from o caminho do componente criado 

//importando componentes
import Navbar from './components/Navbar.jsx'; 
import Banner from './components/Banner.jsx'; 
import Subnavbar from './components/Subnavbar.jsx';
import Footer from './components/Footer.jsx'; 

 //importando conteudo do content
import Boas from './content/Boas.jsx';
import Cards from './content/Cards.jsx';

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
  
        <Boas/>

        <Cards/>
      
        <Footer />
      </>
  );
}

export default App;

