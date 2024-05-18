
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './pages/ProductList/ProductList';
import Createproduct from './pages/CreatePoduct/Createproduct';
import CartList from './pages/CartList/CartList';

function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/create" element={<Createproduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
