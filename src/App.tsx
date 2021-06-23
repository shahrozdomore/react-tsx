import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        {/* <Route path="/shop" component={Shop} /> */}
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
