import React from "react"
import Form from "./components/Form"
import "./App.css"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Form }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
