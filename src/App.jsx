import "./app.css";
import { useState } from "react";

function App() {
  const [isCopied, setIsCopied] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const getGreenLineWidth = (rangeValue) => {
    return ((rangeValue - 5) / 10) * 100;
  };

  const [activeCheckboxes, setActiveCheckboxes] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxClick = (index) => {
    const newActiveCheckboxes = [...activeCheckboxes];
    newActiveCheckboxes[index] = !newActiveCheckboxes[index];
    setActiveCheckboxes(newActiveCheckboxes);

    updateGeneratedPassword();
  };

  const getCheckboxButtonStyle = (isActive) => {
    return isActive
      ? {
          backgroundColor: "#A4FFAF",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }
      : {};
  };

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;':\",.<>?/";
  
  const generatePassword = (length, options) => {
    let characters = "";
  
    if (options.uppercase) {
      characters += uppercaseLetters;
    }
    if (options.lowercase) {
      characters += lowercaseLetters;
    }
    if (options.numbers) {
      characters += numbers;
    }
    if (options.symbols) {
      characters += symbols;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  };

  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const updateGeneratedPassword = () => {
    if (!activeCheckboxes.some((checked) => checked)) {
      setIsGenerated(false); 
      setGeneratedPassword(""); 
      return;
    }
    const newPassword = generatePassword(rangeValue, {
      uppercase: activeCheckboxes[0],
      lowercase: activeCheckboxes[1],
      numbers: activeCheckboxes[2],
      symbols: activeCheckboxes[3],
    });
    setGeneratedPassword(newPassword);
    setIsGenerated(true);
  };

  return (
    <div className="App">
      <h2 className="password_h2">Password Generator</h2>
      <div className="copy_box">
        <div>
        {isGenerated && <h1 className="copy_numbers">{generatedPassword}</h1>}
        </div>
        
        <div className="logo_div">
          {isCopied && <p className="copied_text">COPIED</p>}
          <svg
            className="copy_logo"
            width="21"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleCopyClick}
          >
            <path
              className="my_path"
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
      </div>
      <div className="container">
        <div className="character_box">
          <h2 className="character_length">Character Length</h2>
          <h2 className="character_number">{rangeValue}</h2>
        </div>
        <div className="input_box">
          <input
            type="range"
            id="vol"
            name="vol"
            min="5"
            max="15"
            value={rangeValue}
            onChange={handleRangeChange}
          />
          <output></output>
          <div
            class="green_line"
            style={{ width: `${getGreenLineWidth(rangeValue)}%` }}
          ></div>
        </div>
        <div className="checkbox_div">
          {[
            "Include Uppercase Letters",
            "Include Lowercase Letters",
            "Include Numbers",
            "Include Symbols",
          ].map((text, index) => (
            <div className="checkbox_label_box" key={index}>
              <button
                className="checkbox_button"
                style={getCheckboxButtonStyle(activeCheckboxes[index])}
                onClick={() => handleCheckboxClick(index)}
              >
                {activeCheckboxes[index] && (
                  <svg
                    width="14"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#18171F"
                      stroke-width="3"
                      fill="none"
                      d="M1 5.607 4.393 9l8-8"
                    />
                  </svg>
                )}
              </button>
              <span class="checkbox_text">{text}</span>
            </div>
          ))}
        </div>

        <div className="strength_box">
          <h2 className="strength_h2">STRENGTH</h2>
          <div className="strength_power">
            <span className="medium_text">MEDIUM</span>
            <div className="energy_levels_box">
              <div className="level"></div>
              <div className="level"></div>
              <div className="level"></div>
              <div className="level"></div>
            </div>
          </div>
        </div>
        <button className="generate_button"onClick={() => {
          setIsGenerated(true);
          updateGeneratedPassword();
        }}>
          GENERATE{" "}
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24232C"
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
