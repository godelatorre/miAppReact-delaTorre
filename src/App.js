import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';
import Footer from './components/footer/Footer'
import Checkout from './components/checkout/Checkout';
import FormularioComentario from './components/formulario/Formulario';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Navegador />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="SOMOS NUESTRO PROPIO BANCO"/>}/>
            <Route path='/Home' element={<ItemListContainer greeting="Destacadas (El precio incluye 4 semillas)" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/semas/:categoryId' element={<ItemListContainer greeting='Semas:' />} />
            <Route path='/Comentanos' element={<FormularioComentario />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};
 

export default App;

