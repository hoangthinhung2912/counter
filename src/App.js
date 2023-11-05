import "./App.css";
import { useCallback, useState } from "react";
import classes from "./App.css";

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleIncreaseNumber = () => {
    setCurrentNumber((prev) => {
      return prev + 1;
    });
  };

  const handleDecreaseNumber = () => {
    setCurrentNumber((prev) => {
      return prev - 1 < 0 ? 0 : prev - 1;
    });
  };

  const handleOnReset = () => {
    setCurrentNumber(0);
  };

  return (
    <div className="bg-[#C2DEDC] h-[100vh] w-[100vw] select-none">
      <div className="pt-40 pb-20 flex justify-center items-center">
        <div
          className="bg-[#79AC78] w-[80px] h-[80px] flex items-center justify-center mx-[80px] text-5xl text-white cursor-pointer rounded-md border border-[#618264] hover:bg-[#618264]"
          onClick={handleDecreaseNumber}
        >
          -
        </div>

        <div className="bg-[#EA906C] rounded-full h-[250px] w-[250px] text-5xl text-white flex items-center justify-center font-bold CurrentNumberWrap">
          {currentNumber}
        </div>

        <div
          className="bg-[#79AC78] w-[80px] h-[80px] flex items-center justify-center mx-[80px] text-5xl text-white cursor-pointer rounded-md border border-[#618264] hover:bg-[#618264]"
          onClick={handleIncreaseNumber}
        >
          +
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div
          className="bg-[#EEE2DE] text-[#967E76] text-3xl p-2 w-[200px] text-center rounded-md border border-[#D8C4B6] cursor-pointer hover:text-[#B31312] hover:bg-[#D8C4B6] hover:border-[#C38154]"
          onClick={handleOnReset}
        >
          Reset
        </div>
      </div>
    </div>
  );
}

export default App;
