import './App.css';

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<ProductListing />}></Route>
          <Route path='/product/product:id' element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
