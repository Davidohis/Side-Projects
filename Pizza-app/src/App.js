import React, {useState} from 'react';
import { GlobalStyle } from './globalStyles';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Shopping from "./Pages/Shopping";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Shopping} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
