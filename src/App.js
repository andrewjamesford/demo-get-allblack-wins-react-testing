import React from "react";
import "./styles.css";
import { getAllBlacksWins } from "./utils";
import { useState } from "react";
import matchData from "./data.json";

export default function App() {
  const [year, setYear] = useState(2012);
  const [displayResult, setDisplayResult] = useState("");

  const handleButton = () => {
    const result = getAllBlacksWins(matchData, parseInt(year));
    setDisplayResult(result);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <div className="App">
      <h1>All Black Wins for a year</h1>
      <div>
        <input
          type="number"
          placeholder="2012"
          value={year}
          onChange={handleYearChange}
        />
        <button onClick={handleButton}>Get Year</button>
      </div>
      <div>
        {displayResult !== "" && displayResult !== 0 ? (
          <p>Wins: {displayResult}</p>
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}
