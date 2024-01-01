import {createRoot} from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import React from 'react'
const container =document.getElementById('root')
const root =createRoot(container)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)