import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_LOCAL_URL;
axios.defaults.withCredentials = true;

function App() {

  const user = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path= "/" element={<Home/>}>
          </Route>
          <Route path= "/products/:category" element={<ProductList/>}>
          </Route>
          <Route path= "/product/:id" element={<Product/>}>
          </Route>
          <Route path= "/cart" element={<Cart/>}>
          </Route>
          {/* <Route path= "/login" element={ user ? <Navigate to="/"/> : <Login/>}> */}
          <Route path= "/login" element={<Login/>}>
          </Route>
          {/* <Route path= "/register" element={ user ? <Navigate to="/"/> : <Register/>}> */}
          <Route path= "/register" element={<Register/>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
