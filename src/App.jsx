
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import { ItemsDetail } from './Components/ItemsDetail';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategory' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemsDetail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
