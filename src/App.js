import "./styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
// Particle.js
import Particle from "./components/Particle";
//Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Particle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
