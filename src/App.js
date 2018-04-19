import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import router from './routers';

class App extends Component {
  render() {
    return (

      <Provider store={store}>      	
      	<div>      	
      		{router}
      	</div>
      </Provider>
    );
  }
}

export default App;
