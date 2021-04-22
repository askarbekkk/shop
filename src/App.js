import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Header";
import Shop from "./Shop";
import Cart from "./Cart";
import {Container} from "react-bootstrap";
import Favourites from "./Favourites";

const App = () => {
  return (
      <Router>
        <Header />
        <Container className='my-3'>
          <Route exact path='/' component={Shop}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/favorites' component={Favourites}/>
        </Container>
      </Router>
  );
};

export default App;