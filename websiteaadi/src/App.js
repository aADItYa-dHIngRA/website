port React from 'react';
import Video from './video'
//import logo from './logo.svg'
import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './home'
class App extends React.Component{
  render(){
    return (
        <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/watch" component={Video} />
      </BrowserRouter>
    </div>
  
  );
  }
  
}

export default App;
