import Navbar from "../components/Navbar";
import smartFit from "../lottieFiles/smartConnect.json";
import Lottie from "react-lottie";

const SmartWatch = () => {
  return (
    <>
      <Navbar />
      <div className="container-w-flex">
        <h2>Smart Watch</h2>
        <div className="dash-card dash-card-auto">
          <p>FireBolt 360</p>
        </div>
        <div className="dash-card dash-card-auto">
          <h2>Steps</h2>
          <h1>{Math.floor(Math.random() * (5000 - 1000 + 1) + 1000)}</h1>
        </div>
        <div className="dash-card dash-card-auto">
          <h2>Sleep</h2>
          <h1>
            {Math.floor(Math.random() * (5 - 4 + 1) + 4) +
              "." +
              String(Math.floor(Math.random() * 100) + 1)}
            h
          </h1>
        </div>
      </div>
      <div style={{ position: "absolute", top: "535px", left: "80px" }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: smartFit,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={200}
          width={200}
        />
      </div>
    </>
  );
};

export default SmartWatch;
