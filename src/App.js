import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 1000 },
    },
    size: { value: 3, random: true },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
  },
};

function App() {
  return (
    <div>
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
