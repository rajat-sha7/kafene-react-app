import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/LoginPage/Login";
import OrderList from "./pages/Order/OrderList";
import Products from "./pages/Products/Products";
import { User } from "./pages/Users/User";

function App() {

  return (
    <Router>
        <Routes>   
          <Route path="/" element={<Login />} />
          <Route path="/order" element={<OrderList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
        </Routes>
    </Router>
  );
}


export default App;