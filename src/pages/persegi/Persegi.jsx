import { useState } from "react";
import "./Persegi.css";

export default function Persegi() {
  const [sisi, setSisi] = useState("");
  const [result, setResult] = useState(null);

  const hitung = () => {
    const s = parseFloat(sisi);
    if (isNaN(s) || s <= 0) return;
    const luas = s * s;
    const keliling = 4 * s;
    const diagonal = s * Math.sqrt(2);
    setResult({ luas, keliling, diagonal, sisi: s });
  };

  const reset = () => { setSisi(""); setResult(null); };

  return (
    <div className="geo-container persegi-container">
      <div className="geo-header">
        <div className="geo-icon persegi-icon">⬛</div>
        <h1 className="geo-title">Persegi</h1>
        <p className="geo-subtitle">Hitung luas, keliling dan diagonal persegi</p>
      </div>

      <div className="geo-form">
        <div className="input-group">
          <label>Panjang Sisi (s)</label>
          <div className="input-wrapper">
            <input
              type="number"
              value={sisi}
              onChange={(e) => setSisi(e.target.value)}
              placeholder="Masukkan panjang sisi..."
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
          <div className="results-grid three-results">
            <div className="result-card highlight">
              <div className="result-icon">🔷</div>
              <div className="result-label">Luas</div>
              <div className="result-value">{result.luas.toFixed(4)}</div>
              <div className="result-unit">cm²</div>
            </div>
            <div className="result-card">
              <div className="result-icon">📏</div>
              <div className="result-label">Keliling</div>
              <div className="result-value">{result.keliling.toFixed(4)}</div>
              <div className="result-unit">cm</div>
            </div>
            <div className="result-card">
              <div className="result-icon">↗️</div>
              <div className="result-label">Diagonal</div>
              <div className="result-value">{result.diagonal.toFixed(4)}</div>
              <div className="result-unit">cm</div>
            </div>
          </div>
          <div className="formula-box">
            <p>📖 <strong>Rumus:</strong></p>
            <p>Luas = s² = {result.sisi}² = {result.luas.toFixed(4)} cm²</p>
            <p>Keliling = 4 × s = 4 × {result.sisi} = {result.keliling.toFixed(4)} cm</p>
            <p>Diagonal = s × √2 = {result.sisi} × √2 = {result.diagonal.toFixed(4)} cm</p>
          </div>
        </div>
      )}

      <div className="geo-visual">
        <svg viewBox="0 0 200 200" width="200" height="200">
          <rect x="30" y="30" width="140" height="140" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="3"/>
          <line x1="30" y1="30" x2="170" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3"/>
          <text x="85" y="195" fill="#fb923c" fontSize="13" fontWeight="bold">s</text>
          <text x="175" y="105" fill="#fb923c" fontSize="13" fontWeight="bold">s</text>
          <text x="105" y="112" fill="#f59e0b" fontSize="11" fontWeight="bold">d</text>
        </svg>
      </div>
    </div>
  );
}
