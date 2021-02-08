import "./styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
// Particle.js
import Particle from "./components/Particle";
//Router
import { Route, Switch, useLocation } from "react-router-dom";
// Animate Presence
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* Navgation */}
      <Nav />

      {/* Background */}
      <Particle />

      {/* Body */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </AnimatePresence>

      
    </div>
  );
}

export default App;
