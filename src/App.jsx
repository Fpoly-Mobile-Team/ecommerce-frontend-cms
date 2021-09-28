import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ForgotPassword from "./pages/ForgotPassword";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/add-product">
          <AddProduct />
        </Route>
        <Route path="/edit-product">
          <EditProduct />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
