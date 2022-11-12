import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
// import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { persistStore } from 'reduxjs-toolkit-persist';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
