import { useState } from "react";
import "./Lingkaran.css";

export default function Lingkaran() {
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState(null);

  const hitung = () => {
    const r = parseFloat(radius);
    if (isNaN(r) || r <= 0) return;
    const luas = Math.PI * r * r;
    const keliling = 2 * Math.PI * r;
    const diameter = 2 * r;
    setResult({ luas, keliling, diameter, r });
  };

  const reset = () => { setRadius(""); setResult(null); };

  return (
    <div className="geo-container lingkaran-container">
      <div className="geo-header">
        <div className="geo-icon lingkaran-icon">⭕</div>
        <h1 className="geo-title">Lingkaran</h1>
        <p className="geo-subtitle">Hitung luas dan keliling lingkaran</p>
      </div>

      <div className="geo-form">
        <div className="input-group">
          <label>Jari-jari (r)</label>
          <div className="input-wrapper">
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              placeholder="Masukkan jari-jari..."
              min="0"
            />
            <span className="input-unit">cm</span>
          </div>
        </div>
        <div className="geo-actions">
          <button className="btn-hitung" onClick={hitung}>Hitung</button>
          <button className="btn-reset" onClick={reset}>Reset</button>
        </div>
      </div>

      {result && (
        <div className="geo-results">
          <h3>Hasil Perhitungan</h3>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-icon">📐</div>
              <div className="result-label">Diameter</div>
              <div className="result-value">{result.diameter.toFixed(4)}</div>
              <div className="result-unit">cm</div>
            </div>
            <div className="result-card highlight">
              <div className="result-icon">🔷</div>
              <div className="result-label">Luas</div>
              <div className="result-value">{result.luas.toFixed(4)}</div>
              <div className="result-unit">cm²</div>
            </div>
            <div className="result-card">
              <div className="result-icon">🔄</div>
              <div className="result-label">Keliling</div>
              <div className="result-value">{result.keliling.toFixed(4)}</div>
              <div className="result-unit">cm</div>
            </div>
          </div>
          <div className="formula-box">
            <p>📖 <strong>Rumus:</strong></p>
            <p>Luas = π × r² = π × {result.r}² = {result.luas.toFixed(4)} cm²</p>
            <p>Keliling = 2 × π × r = 2 × π × {result.r} = {result.keliling.toFixed(4)} cm</p>
          </div>
        </div>
      )}

      {/* Visual */}
      <div className="geo-visual">
        <svg viewBox="0 0 200 200" width="200" height="200">
          <circle cx="100" cy="100" r="80" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="3" strokeDasharray="8 4"/>
          <line x1="100" y1="100" x2="180" y2="100" stroke="#f59e0b" strokeWidth="2.5"/>
          <text x="135" y="95" fill="#f59e0b" fontSize="13" fontWeight="bold">r</text>
          <circle cx="100" cy="100" r="4" fill="#6366f1"/>
        </svg>
      </div>
    </div>
  );
}
