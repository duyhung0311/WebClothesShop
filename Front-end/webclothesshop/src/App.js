import logo from './logo.svg';
import './App.css';
import Login from './feature/login/index';
import Homepage from './feature/homepage/index';
import Product from './feature/product/view/index'
import SingleProduct from './feature/singleProduct/view';
 './feature/singleProduct/view/index'
 import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
              {/* <Homepage/> */}
              {/* <Login/> */}
              {/* <Product/> */}
              {/* <SingleProduct/> */}
        
            <Link to="/home" ></Link>
            <Link to="/login" ></Link>
            <Link to="/singleproduct"></Link>
            <Link to="/product"></Link>

            <Switch>
        <Route path="/home" >
          <Homepage/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/singleproduct">
          <SingleProduct/>
        </Route>
      </Switch>
      </div>

     

    </Router>
    
    
  );
}

export default App;
