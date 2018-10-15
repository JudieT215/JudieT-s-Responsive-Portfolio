import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";

const App = () => (
  <Router>
    <Hero backgroundImage="https://images.unsplash.com/photo-1530476609330-4c1acb54f479?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3391bac76baaf3350e09e5ec17dab40d&auto=format&fit=crop&w=752&q=80">
      <div>
        <Wrapper>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
      
    </Hero>
    
  </Router>
);

export default App;
