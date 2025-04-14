import './App.css';
import Header from './Header';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './Protected';
import SearchProduct from './SearchProduct';
import ProductList from './ProductList';
import AddProduct from './Addproduct';  // Đảm bảo tên tệp khớp với import


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {/* Các route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
