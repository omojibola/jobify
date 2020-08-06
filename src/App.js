import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Nabvar/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
