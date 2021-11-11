import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Navigations from './pages/Shared/Navigations/Navigations';
import NotFound from './pages/NotFound/NotFound';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ExploreProducts from './pages/ExploreProducts/ExploreProducts';
import Login from './pages/Login/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigations></Navigations>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreproducts">
              <ExploreProducts></ExploreProducts>
            </Route>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
