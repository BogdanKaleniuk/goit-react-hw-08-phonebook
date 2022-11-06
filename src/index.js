import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'


import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import { persistStore } from 'reduxjs-toolkit-persist'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
