import React from 'react'

import Layout_1 from './layers/layout_1';
import ProductList from './containers/ProductContainer/ProductList';

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
