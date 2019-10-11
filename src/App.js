import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import ExercisesList from "./components/ex-list";
import EditExercise from "./components/edit-ex";
import CreateExercise from "./components/create-ex";
import CreateUser from "./components/create-user";

const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
