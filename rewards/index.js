const Web3 = require("web3");
const fs = require("fs");
const contractJson = fs.readFileSync("MAG.json");

const abi = JSON.parse(contractJson);
const web3 = new Web3("http://127.0.0.1:7545");

const contractAddress = "0xf7c8e5dcdeE29dE1ae8643141cdC5d0Ef9AAFFC7";
const erc20Contract = new web3.eth.Contract(abi, contractAddress);

const ownerPrivateKey =
  "0xaa3c3f50af0f239c5ab896cc9451e226c768e3106be33fb97947274c87b19410";
const ownerAddress = "0x874b5a64f052fceCCDA2C95E34ff0be6b1DdF719";

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/create", async (req, res) => {
  const wallet = await web3.eth.accounts.create();
  await res.send({ wallet: wallet.address, private: wallet.privateKey });
});

app.post("/balance", async (req, res) => {
  const { address } = req.body;
  const balance = await erc20Contract.methods.balanceOf(address).call();
  await res.send(balance);
});

app.post("/reward", async (req, res) => {
  const { rewardAmt, toAddress } = req.body;
  const txObject = {
    from: ownerAddress,
    to: contractAddress,
    gas: 200000,
    data: erc20Contract.methods
      .transfer(toAddress, Number(rewardAmt))
      .encodeABI(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    txObject,
    ownerPrivateKey
  );

  const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  await res.send(result);
});

app.listen(8000, () => {
  console.log("Rewards server running properly");
});
