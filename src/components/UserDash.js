import Navbar from "./Navbar";
import dashLinks from "../data/dashlink";
import DashCard from "./DashCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config";
import Popup from "reactjs-popup";
import { IoIosWallet } from "react-icons/io";
import MAG from "./MAG design.png";
import "./3d.css";
import axios from "axios";

const UserDash = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [src, setSrc] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(2);
  useEffect(() => {
    const user = supabase.auth.user();
    setAddress(user.user_metadata.address);
    async function fetchData() {
      const res = await axios.post("http://192.168.112.244:8000/balance", {
        address: user.user_metadata.address,
      });
      await setBalance(() => {
        return res.data;
      });
    }
    fetchData();
    if (!user) {
      navigate("/login");
    } else {
      setUser(user);
    }
  }, [navigate]);

  return (
    <>
      {src && (
        <Popup open={true} modal>
          {(close) => (
            <div
              style={{
                borderRadius: 20,
                backgroundColor: "white",
                height: "400px",
                width: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="image-container">
                <a
                  className="close"
                  onClick={() => {
                    setSrc(() => false);
                    return close;
                  }}
                  style={{ position: "absolute", top: "-30px", right: "-10px" }}
                >
                  &times;
                </a>
                <div class="image">
                  <img src={MAG} alt="MAG" />
                </div>
              </div>
              <p style={{ marginBottom: "2px" }}>Wallet Address</p>
              <p style={{ fontSize: "10px", fontWeight: "bold", margin: 0 }}>
                {address}
              </p>
              <p>Wallet Balance : {balance + " MAG"}</p>
            </div>
          )}
        </Popup>
      )}
      <div
        style={{ position: "absolute", right: 20, top: 15 }}
        onClick={() => {
          setSrc(() => true);
          console.log(src);
        }}
      >
        <IoIosWallet size="3em" color="white" />
      </div>
      <Navbar />
      <div className="container dashboard">
        {user && (
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            Welcome, {user.user_metadata.name}!
          </p>
        )}
        <div className="card-container">
          {dashLinks.map((dashLink, index) => (
            <DashCard
              key={index}
              name={dashLink.name}
              link={dashLink.link}
              img={dashLink.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDash;
