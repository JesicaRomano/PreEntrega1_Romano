
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Components/Cart';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import { ItemsDetail } from './Components/ItemsDetail';
import NavBar from './Components/NavBar';
import { CartContextProvider } from './Context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemsDetail/>} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
