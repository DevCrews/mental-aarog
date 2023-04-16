import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import supabase from "../config";
import Lottie from "react-lottie";
import twitter from "../lottieFiles/twitter.json";

const TwitterAnalysis = () => {
  const user = supabase.auth.user();
  const [data, setData] = useState();
  useEffect(() => {
    const json = JSON.stringify({
      username: user.user_metadata.twitter,
    });
    async function fetchData() {
      const res = await axios.post(
        "http://192.168.112.244:5000/twitter",
        json,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await setData(res.data);
      await console.log(res.data);
    }
    fetchData();
  }, [user]);
  return (
    <>
      <Navbar />
      <div className="container-w-flex twitter">
        <h2>Twitter Analysis</h2>
        {!data && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
        {data && (
          <div>
            <div className="dash-card dash-card-auto ">
              <h3>Result</h3>
              <h2>{data.result}</h2>
            </div>
            <div className="dash-card dash-card-auto ">
              <h3>Tips</h3>
              {data.tip}
            </div>
          </div>
        )}
      </div>
      <div style={{ position: "absolute", top: "450px", left: "50px" }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: twitter,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={250}
          width={250}
        />
      </div>
    </>
  );
};

export default TwitterAnalysis;
