import React from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom';
import router from './Util/router/router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
