import React from 'react';
import { Provider } from 'react-redux';
import Main from './component/MainComponent';
import { ConfigureStore } from './redux/configureStrore';
import './App.css';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
