import React from 'react'
import ProductList from './containers/ProductList';
import Layout_1 from './layers/layout_1';

function App() {
  return (
    <div className="App">
      <Layout_1>
        <ProductList/>
      </Layout_1>
        

    </div>
  );
}

export default App;
