import React, { useState } from "react";
import styles from "../Swap/SwapSell.module.css";
import TokenInfo from "./SwapTokenInfo";
import {  TokenSelector, SwapInput } from "../../Components/index.js";
import Image from 'next/image';
import swapBackground from '../../public/Assets/swap_back.png'

const SwapSell = ({Sell, Buy, title="sell"}) => {
 
    const tokenData = [
        {
            name: "USDT",
            icon: "/Assets/usdt_green.png",
            symbol: "USDT",
        },
        {
            name: "Vanguard (VOO)",
            icon: "/PoolSvgs/vingurad.png",
            symbol: "VOO",
        },
        {
            name: "SPDR (SPY)",
            icon: "/PoolSvgs/spdr.svg",
            symbol: "SPY",
        },
        {
            name: "iShares Core (IVV)",
            icon: "/PoolSvgs/iShares.svg",
            symbol: "IVV",
        },
        {
            name: "Invesco (QQQ)",
            icon: "/PoolSvgs/invesco.svg",
            symbol: "QQQ",
        },
        {
            name: "GrayScale (GBTC)",
            icon: "/PoolSvgs/gray.png",
            symbol: "GBTC",
        },
    ];

    const dummyData = [{
        name: "ETFS",
        icon: "/svgs/logo.svg",
        symbol: "ETFS",
    }];

  const [dropdownBuy, setDropdownBuy] = useState(Buy);
  const [dropdownSell, setDropdownSell] = useState(Sell);
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [error, setError] = useState("There is an error");


  const handleBuyChange = (e) => {
    const value = e.target.value;

    // Clear previous error
    setError("");

    // Check if the input is a valid number
    if (!isNaN(value) && value.trim() !== "") {
      const sellValue = (Number(value) / 10).toFixed(2);
      setSell(sellValue);
      setBuy(value);
    } else {
      setError("Please enter a valid number");
      setBuy(value);
      setSell("");
    }
  };
  return (
    <main className={styles.swapContainer}>
      <section className={styles.swapSection}>
       {/*} <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e18b20cae4d410bb8cbceecd2e47c4ade8aed704378de4ba8605025f83ba189?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
          alt=""
          className={styles.backgroundImage}
  />*/}
  <Image
          src={swapBackground}
          alt=""
          className={styles.backgroundImage}
  />
        <button className={styles.swapIcon}></button>
        <SwapInput
        title='Sell'
        dropDownDisabled = {true}
        tokenData={dropdownSell}
        ></SwapInput>

        <SwapInput
        title='Buy'
        dropDownDisabled={false}
                    tokenData={tokenData}
                    disabled={true}
        ></SwapInput>
      </section>

      <form>
        <input
          type="text"
          readOnly
          id="amountInput"
          styles={{ color: "red" }}
          className={styles.amountInput}
          // value={error !== "" ? error : "Enter amount"}
          value="Enter Amount"
        />
        <button className={styles.stakeButton}>Sell ETFS</button>
      </form>
    </main>
  );
};

export default SwapSell;
