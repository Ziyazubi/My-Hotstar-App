
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SubMovies from './components/SubMovies';
import { store } from './components/redux/store';


// function App() {
class App extends Component{

  render(){

    return (
      <div className="App">
        <Provider store={store}>
          <SubMovies />
        </Provider>
      </div>
    );
  }
}

export default App;
