import Shop from './Pages/Shop';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import mensbanner from './Components/Assets/banner_mens.png';
import womensbanner from './Components/Assets/banner_women.png';
import kidsbanner from './Components/Assets/banner_kids.png';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/men' element={<ShopCategory banner={mensbanner} category="men"/>} />
        <Route path='/women' element={<ShopCategory  banner={womensbanner} category="women"/>}/>
        <Route path='/kid' element={<ShopCategory  banner={kidsbanner} category="kid"/>}/>
        
      </Routes>
      </BrowserRouter>
 
      <Footer/>
      
    </div>

  );
}

export default App;
