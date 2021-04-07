import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 1000 },
    },
    size: { value: 3, random: true },
  },
};

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signout",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector("#inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  loaduser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onImageButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    fetch("https://stormy-badlands-05777.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: this.state.input }),
    })
      .then((response) => response.json())
      .catch(console.log)
      .then((response) => {
        if (response) {
          fetch("https://stormy-badlands-05777.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
          this.displayFaceBox(this.calculateFaceLocation(response));
        }
      })
      .catch((error) => console.log(error));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { imageUrl, box, route, isSignedIn } = this.state;
    return (
      <div className="main">
        <Particles 
          className="particles" 
          params={particlesOptions} 
        />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {route === "home" ? (
          <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onImageButtonSubmit={this.onImageButtonSubmit}
            />
            <FaceRecognition 
              imageUrl={imageUrl} 
              box={box} 
            />
          </div>
        ) : route === "signout" ? (
          <Signin 
            onRouteChange={this.onRouteChange} 
            loaduser={this.loaduser} 
          />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loaduser={this.loaduser}
          />
        )}
      </div>
    );
  }
}

export default App;
