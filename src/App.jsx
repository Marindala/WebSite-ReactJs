import "./App.css";
import video from "../src/assets/videos/amor.mp4"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <video src={video} autoPlay loop muted></video>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
