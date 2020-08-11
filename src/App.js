import React, { useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Nabvar/Navbar";
import Homepage from "./pages/Homepage";
import PostJob from "./pages/PostJob";
import { ToastProvider } from "react-toast-notifications";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    //initialize materialize js
    M.AutoInit();
  });
  return (
    <div className='App'>
      <Provider store={store}>
        <ToastProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/post-a-job' component={PostJob} />`
          </Switch>
        </ToastProvider>
      </Provider>
    </div>
  );
};

export default App;
