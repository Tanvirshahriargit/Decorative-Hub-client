import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Navigations from './pages/Shared/Navigations/Navigations';
import NotFound from './pages/NotFound/NotFound';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ExploreProducts from './pages/ExploreProducts/ExploreProducts';

function App() {
  return (
    <div className="App">
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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
