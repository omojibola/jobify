import React, { useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Nabvar/Navbar";
import Homepage from "./pages/Homepage";
import PostJob from "./pages/PostJob";
import { Provider } from "react-redux";
import store from "./store";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  useEffect(() => {
    //initialize materialize js
    M.AutoInit();
  });
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/post-a-job' component={PostJob} />
          <Route path='/edit-job' component={EditJobPage} />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
