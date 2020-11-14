import logo from './logo.svg';
import './App.css';
import Login from './feature/login/index';
import Homepage from './feature/homepage/index';
import Product from './feature/product/view/index'
function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <Login/> */}
      <Product/>
    </div>
  );
}

export default App;
