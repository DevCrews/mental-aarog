import Navbar from "../components/Navbar";
import { Button, Snackbar, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config";
import axios from "axios";
import { Web3Storage } from "web3.storage";

const PHQ9Result = () => {
  const user = supabase.auth.user();
  useEffect(() => {
    const timer = setTimeout(async () => {
      const res = await axios.post("http://192.168.112.244:8000/reward", {
        toAddress: user.user_metadata.address,
        rewardAmt: 1,
      });
      console.log(res);
    }, 1000); // wait 1 second before executing the function

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const result = Number(localStorage.getItem("result"));
  const resultStr =
    result >= 0 && result <= 4
      ? "Not at all 😀"
      : result >= 5 && result <= 9
      ? "Mild depression 🙂"
      : result >= 10 && result <= 14
      ? "moderate depression 😐"
      : result >= 15 && result <= 19
      ? "Moderately severe depression 😔"
      : "Severe depression 😭";

  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let finalDate = cDay + "/" + cMonth + "/" + cYear;
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();
  function makeFileObjects() {
    const obj = {
      date: finalDate,
      time: time,
      result: resultStr,
      email: user.email,
    };
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

    const files = [
      new File(["contents-of-file-1"], "plain-utf8.txt"),
      new File([blob], "hello.json"),
    ];
    return files;
  }

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEUyOWJkOThFOEI2Zjg3ZjcwRTFlNTY1YjBiYkNmNTY4ZTJCODQ3RUMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODE2MTM5OTcyNDcsIm5hbWUiOiJpcGZzLW1lbnRhbC1hYXJvZyJ9.IAFkXqzpql4tk6O0jk-nVmewqPgPcYACxXucVoeLuOo";
  const client = new Web3Storage({ token });

  const saveData = async () => {
    setLoading(true);
    let d = {};
    async function storeFiles() {
      const cid = await client.put(makeFileObjects());
      console.log(cid);
      d = {
        date: finalDate,
        time: time,
        result: resultStr,
        cid: cid,
      };
    }
    await storeFiles();
    const { data } = await supabase
      .from("phq9")
      .select()
      .match({ email: user.email });

    const oldD = await data[0]["phqdata"];

    let stringified = "";
    if (oldD === null) {
      const dArray = [];
      dArray.push(d);
      stringified = JSON.stringify(dArray);
    } else {
      const pd = JSON.parse(data[0]["phqdata"]);
      pd.push(d);
      stringified = JSON.stringify(pd);
    }
    await supabase
      .from("phq9")
      .update({ phqdata: stringified })
      .match({ email: user.email });

    await setLoading(false);
    await setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-w-flex result">
        <h2>Result</h2>
        <div className="dash-card dash-card-auto">{resultStr}</div>
        <div className="dash-card dash-card-auto">
          {result >= 0 && result <= 4
            ? "You don't have depression. Stay the same, live your life in the way you like it!, Be Happy."
            : "Fight your depression! The key to navigating depression is to be open, accepting, and loving toward yourself and what you’re going through."}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/phq9/test"}>
            <Button className="primary-btn" variant="contained">
              Restart Quiz
            </Button>
          </Link>
          <LoadingButton
            onClick={() => {
              saveData();
            }}
            type="submit"
            className={loading ? "" : "primary-btn"}
            variant="contained"
            loading={loading}
          >
            Save Results
          </LoadingButton>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully Saved Test Data
        </Alert>
      </Snackbar>
    </>
  );
};

export default PHQ9Result;
