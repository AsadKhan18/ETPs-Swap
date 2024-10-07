// import React, {useState} from "react";
// import styles from "../Swap/Swap.module.css";
// import {SwapInput} from "../../Components/index.js";
// import Image from 'next/image';
// import swapBackground from '../../public/Assets/swap_back.png';
//
// const Swap = ({title = "sell"}) => {
//     const tokenData = [
//         {
//             name: "USDT",
//             icon: "/Assets/usdt_green.png",
//             symbol: "USDT",
//         },
//         {
//             name: "Vanguard (VOO)",
//             icon: "/PoolSvgs/vingurad.png",
//             symbol: "VOO",
//         },
//         {
//             name: "SPDR (SPY)",
//             icon: "/PoolSvgs/spdr.svg",
//             symbol: "SPY",
//         },
//         {
//             name: "iShares Core (IVV)",
//             icon: "/PoolSvgs/iShares.svg",
//             symbol: "IVV",
//         },
//         {
//             name: "Invesco (QQQ)",
//             icon: "/PoolSvgs/invesco.svg",
//             symbol: "QQQ",
//         },
//         {
//             name: "GrayScale (GBTC)",
//             icon: "/PoolSvgs/gray.png",
//             symbol: "GBTC",
//         },
//     ];
//
//     const [buy, setBuy] = useState("");
//     const [sell, setSell] = useState("");
//     const [error, setError] = useState("There is an error");
//
//     const handleBuyChange = (e) => {
//         const value = e.target.value;
//         setError("");
//         if (!isNaN(value) && value.trim() !== "") {
//             const sellValue = (Number(value) / 10).toFixed(2);
//             setSell(sellValue);
//             setBuy(value);
//         } else {
//             setError("Please enter a valid number");
//             setBuy(value);
//             setSell("");
//         }
//     };
//
//     return (
//         <main className={styles.swapContainer}>
//             <section className={styles.swapSection}>
//                 <Image
//                     src={swapBackground}
//                     alt=""
//                     className={styles.backgroundImage}
//                 />
//                 <button className={styles.swapIcon}></button>
//                 <SwapInput
//                     title='Sell'
//                     dropDownDisabled={false}
//                     tokenData={tokenData}
//                 />
//
//                 <SwapInput
//                     title='Buy'
//                     dropDownDisabled={false}
//                     tokenData={tokenData}
//                     disabled={true}
//                 />
//             </section>
//
//             <form>
//                 <input
//                     type="text"
//                     readOnly
//                     id="amountInput"
//                     style={{color: "red"}}
//                     className={styles.amountInput}
//                     value="Enter Amount"
//                 />
//                 <button className={styles.stakeButton}>Buy ETFS</button>
//             </form>
//         </main>
//     );
// };
//
// export default Swap;
import React, { useState } from "react";
import styles from "../Swap/Swap.module.css";
import { SwapInput } from "../../Components/index.js";
import Image from 'next/image';
import swapBackground from '../../public/Assets/swap_back.png';

const Swap = ({ title = "sell" }) => {

    const tokenData = [
        {
            name: "USDT",
            icon: "/Assets/usdt.svg",
            symbol: "USDT",
        },
        {
            name: "Vanguard (VOO)",
            icon: "/PoolSvgs/vanguard.svg",
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
            icon: "/PoolSvgs/gray.svg",
            symbol: "GBTC",
        },
    ];

    const dummyData = [{
        name: "ETFS",
        icon: "/svgs/logo.svg",
        symbol: "ETFS",
    }];

    const [buy, setBuy] = useState("");
    const [sell, setSell] = useState("");
    const [error, setError] = useState("There is an error");

    const handleBuyChange = (e) => {
        const value = e.target.value;
        setError("");
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
                <Image
                    src={swapBackground}
                    alt=""
                    className={styles.backgroundImage}
                />
                <button className={styles.swapIcon}></button>
                <SwapInput
                    title='Sell'
                    dropDownDisabled={false}
                    tokenData={tokenData}
                    disabled={true}
                    
                />
                <SwapInput
                    title='Buy'
                    dropDownDisabled={true}
                    tokenData={dummyData}                />
            </section>

            <form>
                <input
                    type="text"
                    readOnly
                    id="amountInput"
                    style={{color: "red"}}
                    className={styles.amountInput}
                    value="Enter Amount"
                />
                <button className={styles.stakeButton}>Buy ETFS</button>
            </form>
        </main>
    );
};

export default Swap;