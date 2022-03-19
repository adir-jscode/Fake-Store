import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Menubar from './Components/Menubar/Menubar';

function App() {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(count+1);
  }
  const removeFromCart = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  }
  return (
    <div className="App">
      <Menubar count={count} ></Menubar>
      <AllProducts removeFromCart={removeFromCart} addToCart={addToCart}></AllProducts>
    </div>
  );
}

export default App;
