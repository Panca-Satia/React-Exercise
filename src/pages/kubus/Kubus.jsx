import { useState } from "react";
import "./Kubus.css";

export default function Kubus() {
  const [sisi, setSisi] = useState("");
  const [result, setResult] = useState(null);

  const hitung = () => {
    const s = parseFloat(sisi);
    if (isNaN(s) || s <= 0) return;
    const volume = s * s * s;
    const luasPermukaan = 6 * s * s;
    const diagonal = s * Math.sqrt(3);
    const diagonalBidang = s * Math.sqrt(2);
    setResult({ volume, luasPermukaan, diagonal, diagonalBidang, sisi: s });
  };

  const reset = () => { setSisi(""); setResult(null); };

  return (
    <div className="geo-container kubus-container">
      <div className="geo-header">
        <div className="geo-icon kubus-icon">🎲</div>
        <h1 className="geo-title">Kubus</h1>
        <p className="geo-subtitle">Hitung volume dan luas permukaan kubus</p>
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
          <div className="results-grid two-results">
            <div className="result-card highlight">
              <div className="result-icon">📦</div>
              <div className="result-label">Volume</div>
              <div className="result-value">{result.volume.toFixed(4)}</div>
              <div className="result-unit">cm³</div>
            </div>
            <div className="result-card">
              <div className="result-icon">🔷</div>
              <div className="result-label">Luas Permukaan</div>
              <div className="result-value">{result.luasPermukaan.toFixed(4)}</div>
              <div className="result-unit">cm²</div>
            </div>
            <div className="result-card">
              <div className="result-icon">↗️</div>
              <div className="result-label">Diagonal Bidang</div>
              <div className="result-value">{result.diagonalBidang.toFixed(4)}</div>
              <div className="result-unit">cm</div>
            </div>
            <div className="result-card">
              <div className="result-icon">📐</div>
              <div className="result-label">Diagonal Ruang</div>
              <div className="result-value">{result.diagonal.toFixed(4)}</div>
              <div className="result-unit">cm</div>
            </div>
          </div>
          <div className="formula-box">
            <p>📖 <strong>Rumus:</strong></p>
            <p>Volume = s³ = {result.sisi}³ = {result.volume.toFixed(4)} cm³</p>
            <p>Luas Permukaan = 6s² = 6 × {result.sisi}² = {result.luasPermukaan.toFixed(4)} cm²</p>
            <p>Diagonal Ruang = s√3 = {result.sisi} × √3 = {result.diagonal.toFixed(4)} cm</p>
          </div>
        </div>
      )}

      <div className="geo-visual">
        <svg viewBox="0 0 200 200" width="200" height="200">
          {/* Front face */}
          <rect x="45" y="75" width="100" height="100" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="2.5"/>
          {/* Top face */}
          <polygon points="45,75 85,40 185,40 145,75" fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" strokeWidth="2.5"/>
          {/* Right face */}
          <polygon points="145,75 185,40 185,140 145,175" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" strokeWidth="2.5"/>
          {/* Labels */}
          <text x="90" y="132" fill="#8b5cf6" fontSize="13" fontWeight="bold">s</text>
          <text x="104" y="62" fill="#8b5cf6" fontSize="13" fontWeight="bold">s</text>
          <text x="168" y="108" fill="#8b5cf6" fontSize="13" fontWeight="bold">s</text>
        </svg>
      </div>
    </div>
  );
}
