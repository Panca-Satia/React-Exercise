import { useState } from "react";
import "./Tabung.css";

export default function Tabung() {
  const [radius, setRadius] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [result, setResult] = useState(null);

  const hitung = () => {
    const r = parseFloat(radius);
    const t = parseFloat(tinggi);
    if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) return;
    const luasAlas = Math.PI * r * r;
    const luasTutup = Math.PI * r * r;
    const luasSelimut = 2 * Math.PI * r * t;
    const luasPermukaan = 2 * luasAlas + luasSelimut;
    const volume = Math.PI * r * r * t;
    setResult({ luasAlas, luasTutup, luasSelimut, luasPermukaan, volume, r, t });
  };

  const reset = () => { setRadius(""); setTinggi(""); setResult(null); };

  return (
    <div className="geo-container tabung-container">
      <div className="geo-header">
        <div className="geo-icon tabung-icon">🥫</div>
        <h1 className="geo-title">Tabung</h1>
        <p className="geo-subtitle">Hitung volume dan luas permukaan tabung</p>
      </div>

      <div className="geo-form">
        <div className="form-row">
          <div className="input-group">
            <label>Jari-jari (r)</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                placeholder="Jari-jari..."
                min="0"
              />
              <span className="input-unit">cm</span>
            </div>
          </div>
          <div className="input-group">
            <label>Tinggi (t)</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                placeholder="Tinggi..."
                min="0"
              />
              <span className="input-unit">cm</span>
            </div>
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
              <div className="result-icon">🔄</div>
              <div className="result-label">Luas Selimut</div>
              <div className="result-value">{result.luasSelimut.toFixed(4)}</div>
              <div className="result-unit">cm²</div>
            </div>
            <div className="result-card">
              <div className="result-icon">⭕</div>
              <div className="result-label">Luas Alas/Tutup</div>
              <div className="result-value">{result.luasAlas.toFixed(4)}</div>
              <div className="result-unit">cm²</div>
            </div>
          </div>
          <div className="formula-box">
            <p>📖 <strong>Rumus:</strong></p>
            <p>Volume = π × r² × t = π × {result.r}² × {result.t} = {result.volume.toFixed(4)} cm³</p>
            <p>Luas Selimut = 2πrt = 2 × π × {result.r} × {result.t} = {result.luasSelimut.toFixed(4)} cm²</p>
            <p>Luas Permukaan = 2πr(r+t) = {result.luasPermukaan.toFixed(4)} cm²</p>
          </div>
        </div>
      )}

      <div className="geo-visual">
        <svg viewBox="0 0 200 220" width="200" height="220">
          {/* Top ellipse */}
          <ellipse cx="100" cy="50" rx="70" ry="20" fill="rgba(236,72,153,0.2)" stroke="#ec4899" strokeWidth="2.5"/>
          {/* Side */}
          <rect x="30" y="50" width="140" height="120" fill="rgba(236,72,153,0.1)" stroke="none"/>
          <line x1="30" y1="50" x2="30" y2="170" stroke="#ec4899" strokeWidth="2.5"/>
          <line x1="170" y1="50" x2="170" y2="170" stroke="#ec4899" strokeWidth="2.5"/>
          {/* Bottom ellipse */}
          <ellipse cx="100" cy="170" rx="70" ry="20" fill="rgba(236,72,153,0.2)" stroke="#ec4899" strokeWidth="2.5"/>
          {/* Labels */}
          <line x1="100" y1="50" x2="170" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3"/>
          <text x="128" y="46" fill="#f59e0b" fontSize="13" fontWeight="bold">r</text>
          <line x1="178" y1="50" x2="178" y2="170" stroke="#f59e0b" strokeWidth="2"/>
          <text x="183" y="115" fill="#f59e0b" fontSize="13" fontWeight="bold">t</text>
        </svg>
      </div>
    </div>
  );
}
