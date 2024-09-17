import { useState } from "react";

function Color() {
  const [bgColor, setbgColor] = useState("#000000");
  const [enableRGB, setEnableRGB] = useState(false);

  function configRGB(enable) {
    setEnableRGB(enable ? true : false);
  }

  function generateColor() {
    if (!enableRGB) {
      const element = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      let tempColor = "#";
      for (let i = 0; i < 6; i++) {
        tempColor += element[Math.round(Math.random() * (element.length - 1))];
      }
      setbgColor(tempColor);
    }
  }

  return (
    <div className="container" style={{backgroundColor: bgColor}}>
      <div className="btn_list">
        <button onClick={() => configRGB(false)}>Create HEX Color</button>
        <button onClick={() => configRGB(true)}>Create RBG Color</button>
        <button onClick={() => generateColor()}>Generate Random Color</button>
      </div>

      <div className="colorBox" style={{backgroundColor: bgColor}}>{bgColor}</div>
    </div>
  );
}

export default Color;
