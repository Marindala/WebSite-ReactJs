import "./App.css";
import video from "../src/assets/videos/amor.mp4"

function App() {
  return (
    <>
      <div className="container">
        <video src={video} autoPlay loop muted></video>
      </div>
    </>
  );
}

export default App;
