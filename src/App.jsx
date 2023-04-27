import "./app.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2 className="password_h2">Password Generator</h2>
      <div className="copy_box">
        <h1 className="copy_numbers">PTx1f5DaFX</h1>
        <svg
          className="copy_logo"
          width="21"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            fill="#A4FFAF"
          />
        </svg>
      </div>
      <div className="container">
        <div className="character_box">
          <h2 className="character_length">Character Length</h2>
          <h2 className="character_number">10</h2>
        </div>
        <div className="input_box">
          <input type="range" id="vol" name="vol" min="0" max="4" value="2" />
          <output></output>
          <div class="green_line"></div>
        </div>
        <div className="checkbox_div">
          <div className="checkbox_label_box">
           <div className="checkbox_button"></div>
            <span class="checkbox_text">Include Uppercase Letters</span>
          </div>
          <div className="checkbox_label_box">
          <div className="checkbox_button"></div>
            <span class="checkbox_text">Include Lowercase Letters</span>
          </div>
          <div className="checkbox_label_box">
          <div className="checkbox_button"></div>
            <span class="checkbox_text">Include Numbers</span>
          </div>
          <div className="checkbox_label_box">
          <div className="checkbox_button"></div>
            <span class="checkbox_text">Include Symbols</span>
          </div>
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
        <button className="generate_button">GENERATE <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg></button>
      </div>
    </div>
  );
}

export default App;
