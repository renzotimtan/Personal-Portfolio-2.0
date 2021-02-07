import "./styles/App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.09,
            },
            move: {
              direction: "right",
              speed: 0.4,
            },
            size: {
              value: 1.3,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="headings">
        <Header />
      </div>
    </div>
  );
}

export default App;
