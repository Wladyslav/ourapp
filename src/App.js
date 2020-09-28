import React, { Component } from 'react'; 
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import Contact from './pages/mainPage/Contact';

class App extends Component {
  state = {

  }
  render(){
    return(
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </>
      </BrowserRouter>
      
      
    )
  }
}


export default App;
