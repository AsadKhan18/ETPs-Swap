// import React, { useState } from "react";
// import { TokenSelector } from "../../index"; // Assuming the TokenSelector component is already created
// import styles from "./SwapInput.module.css";
// import usdt from "../../../public/Assets/usdt_green.png";
// import TokenDropdown2 from "@/Components/SelectPare/token2";
// import TokenDropdown3 from "@/Components/SelectPare/swap";
//
// const SwapInput = ({
//   title = "sell",
//   dropDownDisabled = false,
//   tokenData,
//   disabled = false,
// }) => {
//   const [inputValue, setInputValue] = useState(0);
//   const [balance, setBalance] = useState(100); // Initial balance of 100
//   const [selectedToken, setSelectedToken] = useState({
//     name: "",
//     symbol: "",
//     icon: "",
//   });
//
//   const handleInputChange = (event) => {
//     const value = event.target.value ? parseFloat(event.target.value) : 0;
//     setInputValue(value);
//     setBalance(100 - value); // Subtract input value from initial balance
//   };
//
//   return (
//     <div className={styles.container}>
//       {/* Row 1 */}
//       <div className={styles.row}>
//         <span className={styles.sellText}>{title}</span>
//       </div>
//
//       {/* Row 2 */}
//       <div className={styles.row}>
//         <div className={styles.inputColumn}>
//           <input
//             type="text"
//             className={styles.input}
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter amount"
//             style={{ color: disabled ? "gray" : "white" }}
//             disabled={disabled ? true : false}
//           />
//         </div>
//         <div className={styles.dropdownColumn}>
//         {/* <TokenDropdown2 /> */}
//           <TokenSelector
//             tokenData={tokenData}
//             setselectedItemCallBack={setSelectedToken}
//             selectedBoxHeight="40px"
//             selectedIconHeight="35px"
//             hideIcon={false}
//             hideSymbol={false}
//             hideName={true}
//             hideSearch={true}
//             disabled={dropDownDisabled}
//           />
//         </div>
//       </div>
//
//       {/* Row 3 */}
//       <div className={styles.row} style={{ justifyContent: "flex-end" }}>
//         <span className={styles.balanceText}>Balance: {balance}</span>
//       </div>
//     </div>
//   );
// };
//
// export default SwapInput;
import React, { useState } from "react";
import { TokenSelector } from "../../index";
import styles from "./SwapInput.module.css";

const SwapInput = ({
                       title = "sell",
                       dropDownDisabled = false,
                       tokenData,
                       disabled = false,
                   }) => {
    const [inputValue, setInputValue] = useState(0);
    const [balance, setBalance] = useState(100);
    const [selectedToken, setSelectedToken] = useState(tokenData[0]);

    const handleInputChange = (event) => {
        const value = event.target.value ? parseFloat(event.target.value) : 0;
        setInputValue(value);
        setBalance(100 - value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <span className={styles.sellText}>{title}</span>
            </div>

            <div className={styles.row}>
                <div className={styles.inputColumn}>
                    <input
                        type="text"
                        className={styles.input}
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        style={{color: disabled ? "gray" : "white"}}
                        disabled={disabled}
                    />
                </div>
                <div className={styles.dropdownColumn}>
                    <TokenSelector
                        tokenData={tokenData}
                        setselectedItemCallBack={setSelectedToken}
                        selectedBoxHeight="40px"
                        selectedIconHeight="35px"
                        hideIcon={false}
                        hideSymbol={false}
                        hideName={true}
                        hideSearch={true}
                        disabled={dropDownDisabled}
                    />
                </div>
            </div>

            <div className={styles.row} style={{justifyContent: "flex-end"}}>
                <span className={styles.balanceText}>Balance: {balance}</span>
            </div>
        </div>
    );
};

export default SwapInput;