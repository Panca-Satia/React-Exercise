import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(0);

  const getCountColor = () => {
    if (count > 0) return "positive";
    if (count < 0) return "negative";
    return "zero";
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Aplikasi Counter</h1>
      <div className={`counter-display ${getCountColor()}`}>
        <span className="counter-value">{count}</span>
        <span className="counter-label">
          {count > 0 ? "Positif" : count < 0 ? "Negatif" : "Nol"}
        </span>
      </div>

      <div className="step-selector">
        <label className="step-label">Langkah:</label>
        <div className="step-buttons">
          {[1, 5, 10, 100].map((s) => (
            <button
              key={s}
              className={`step-btn ${step === s ? "active" : ""}`}
              onClick={() => setStep(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="counter-controls">
        <button className="ctrl-btn decrement" onClick={decrement}>
          <span>−</span>
          <small>Kurangi {step}</small>
        </button>
        <button className="ctrl-btn reset" onClick={reset}>
          <span>↺</span>
          <small>Reset</small>
        </button>
        <button className="ctrl-btn increment" onClick={increment}>
          <span>+</span>
          <small>Tambah {step}</small>
        </button>
      </div>

      <div className="counter-history">
        <p>Langkah aktif: <strong>{step}</strong></p>
        <p>Nilai saat ini: <strong>{count}</strong></p>
      </div>
    </div>
  );
}
