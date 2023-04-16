import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import supabase from "../config";
import axios from "axios";
import Field from "../components/Field";

const Activities = () => {
  const user = supabase.auth.user();
  const [balance, setBalance] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.post("http://192.168.112.244:8000/balance", {
        address: user.user_metadata.address,
      });
      await setBalance(() => {
        return res.data;
      });
    }
    fetchData();
  }, [user.user_metadata.address]);
  return (
    <>
      <Navbar />
      <div style={{ height: "auto" }} className="container-w-flex wallet">
        <h2>Activities and Rewards</h2>
        <h3>Address</h3>
        <p style={{ fontSize: "12px" }}>{user.user_metadata.address}</p>
        <div className="flex-center">
          <div class="image">
            <img src="/MAG design.png" alt="MAG" />
          </div>
        </div>
        <div className="dash-card dash-card-auto ">
          <h2 style={{ textAlign: "center" }}>MAG / USDT</h2>
          {balance && <h1>{balance}</h1>}
        </div>

        {/* <div>Hello I am here</div> */}
        <Field
          name="PHQ - 9"
          desc="Take PHQ - 9 monthly once and get MAG"
          reward="0.1"
        />
        <Field
          name="Meditation Streak"
          desc="Maintain a streak of 7 days and get MAG"
          reward="0.5"
        />
        <Field
          name="Daily Routine Reward"
          desc="Maintain a streak of 30 days and get MAG"
          reward="1"
        />
        <Field
          name="Show Up"
          desc="Open the app consecutively for 30 days and get rewarded"
          reward="0.9"
        />
      </div>
    </>
  );
};

export default Activities;
