
import './App.css';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= 'Productos'/>
      <Footer/>
    </div>
  );
}

export default App;
