import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const DailyFacts = () => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    async function fetchData() {
      const d = await fetch(
        "https://api.pexels.com/v1/search?query=motivational quotes&per_page=100",
        {
          headers: {
            AUTHORIZATION:
              "563492ad6f917000010000016c0b1ef575304afbb8bfc5513301cb95",
          },
        }
      );
      const pd = await d.json();
      await setSrc(pd.photos[Math.floor(Math.random() * 100)].src.large);
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-w-flex facts">
        <h2>Facts</h2>
        <br />
        {!src && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
        {src && <img src={src} alt="motivational-quote" />}
      </div>
    </>
  );
};

export default DailyFacts;
