import Bill from "./Bill";
import Tip from "./Tip";
import Sum from "./Sum";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(parseInt(""));
  });
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [custom, setCustom] = useState("");
  const [lastIsCustom, setLastIsCustom] = useState(false);

  const handleChange = (e, form) => {
    if (!Number(e.target.value || e.target.value === "")) {
      return;
    } else {
      if (form === "bill") {
        setBill(parseInt(e.target.value) || 0);
      }
      if (form === "people") {
        setPeople(parseInt(e.target.value) || 0);
      }
      if (form === "custom") {
        setCustom(parseInt(e.target.value) || 0);
        setLastIsCustom(true);
      }
    }
  };

  const handleReset = () => {
    setBill("");
    setPeople("");
    setTip("");
    setCustom("");
    setLastIsCustom(false);
    console.log((10 / 3).toFixed(2));
  };

  const isValidCustom = (selectedTip) => {
    if (selectedTip <= 100 && selectedTip > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleTip = (selectedTip) => {
    setTip(selectedTip);
    setLastIsCustom(false);
  };

  const calcTipSum = () => {
    if (bill && people && tip) {
      if (isValidCustom(custom) && lastIsCustom) {
        const customSum = (bill * (custom / 100)) / people;
        return customSum.toFixed(2);
      }
      const sum = (bill * (tip / 100)) / people;
      console.log(tip);

      return sum.toFixed(2);
    } else return 0;
  };

  const calcTotalSum = () => {
    if (bill && people && tip) {
      const totalTip = calcTipSum() * 4;
      const sum = (totalTip + bill) / people;
      return sum.toFixed(2);
    } else return 0;
  };

  return (
    <div className="App font-mono">
      <div>
        <header className="lg:pt-40 lg:pb-20 pt-9 pb-10 flex justify-center items-center uppercase">
          <h1 className="text-2xl lg:text-4xl text-cyan-darkgray tracking-morewide font-bold">
            spli<br></br>tter
          </h1>
        </header>
        <main className="p-7  rounded-t-3xl md:rounded-3xl bg-white lg:flex md:mx-20 lg:flex-row lg:w-2/3 lg:mx-auto">
          <div className="space-y-7 flex flex-col lg:flex-1 lg:mr-8">
            <Bill handleChange={handleChange} bill={bill} />
            <Tip
              handleChange={handleChange}
              handleTip={handleTip}
              people={people}
              tip={tip}
              custom={custom}
              isValidCustom={isValidCustom}
              lastIsCustom={lastIsCustom}
            />
          </div>
          <div className="lg:flex-1 ">
            <Sum
              handleReset={handleReset}
              calcTipSum={calcTipSum}
              calcTotalSum={calcTotalSum}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
