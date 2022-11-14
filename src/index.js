import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
// import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { BrowserRouter } from 'react-router-dom';
// import { persistStore } from 'reduxjs-toolkit-persist';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null}> */}
        {/* <BrowserRouter basename="/your_repo_name/"> */}
        <App />
        {/* </PersistGate> */}
        {/* </BrowserRouter> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
