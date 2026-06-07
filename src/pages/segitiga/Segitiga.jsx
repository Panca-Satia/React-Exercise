import { useState } from "react";
import "./Segitiga.css";

export default function Segitiga() {
  const [alas, setAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [sisiA, setSisiA] = useState("");
  const [sisiB, setSisiB] = useState("");
  const [sisiC, setSisiC] = useState("");
  const [result, setResult] = useState(null);

  const hitung = () => {
    const a = parseFloat(alas);
    const t = parseFloat(tinggi);
    if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0) return;

    const luas = 0.5 * a * t;
    const sa = parseFloat(sisiA) || a;
    const sb = parseFloat(sisiB) || t;
    const sc = parseFloat(sisiC) || Math.sqrt(a * a + t * t);
    const keliling = sa + sb + sc;

    setResult({ luas, keliling, alas: a, tinggi: t, sisiA: sa, sisiB: sb, sisiC: sc });
  };

  const reset = () => { setAlas(""); setTinggi(""); setSisiA(""); setSisiB(""); setSisiC(""); setResult(null); };

  return (
    <div className="geo-container segitiga-container">
      <div className="geo-header">
        <div className="geo-icon segitiga-icon">🔺</div>
        <h1 className="geo-title">Segitiga</h1>
        <p className="geo-subtitle">Hitung luas dan keliling segitiga</p>
      </div>

      <div className="geo-form">
        <div className="form-row">
          <div className="input-group">
            <label>Alas (a)</label>
            <div className="input-wrapper">
              <input type="number" value={alas} onChange={(e) => setAlas(e.target.value)} placeholder="Alas..." min="0"/>
              <span className="input-unit">cm</span>
            </div>
          </div>
          <div className="input-group">
            <label>Tinggi (t)</label>
            <div className="input-wrapper">
              <input type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} placeholder="Tinggi..." min="0"/>
              <span className="input-unit">cm</span>
            </div>
          </div>
        </div>
        <p className="optional-label">Sisi-sisi (opsional untuk keliling)</p>
        <div className="form-row three-col">
          <div className="input-group">
            <label>Sisi A</label>
            <div className="input-wrapper">
              <input type="number" value={sisiA} onChange={(e) => setSisiA(e.target.value)} placeholder="Sisi A..." min="0"/>
              <span className="input-unit">cm</span>
            </div>
          </div>
          <div className="input-group">
            <label>Sisi B</label>
            <div className="input-wrapper">
              <input type="number" value={sisiB} onChange={(e) => setSisiB(e.target.value)} placeholder="Sisi B..." min="0"/>
              <span className="input-unit">cm</span>
            </div>
          </div>
          <div className="input-group">
            <label>Sisi C</label>
            <div className="input-wrapper">
              <input type="number" value={sisiC} onChange={(e) => setSisiC(e.target.value)} placeholder="Sisi C..." min="0"/>
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
          <div className="results-grid">
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
          </div>
          <div className="formula-box">
            <p>📖 <strong>Rumus:</strong></p>
            <p>Luas = ½ × a × t = ½ × {result.alas} × {result.tinggi} = {result.luas.toFixed(4)} cm²</p>
            <p>Keliling = a + b + c = {result.sisiA} + {result.sisiB} + {result.sisiC.toFixed(2)} = {result.keliling.toFixed(4)} cm</p>
          </div>
        </div>
      )}

      <div className="geo-visual">
        <svg viewBox="0 0 200 200" width="200" height="200">
          <polygon points="100,20 180,170 20,170" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="3"/>
          <line x1="100" y1="20" x2="100" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3"/>
          <text x="106" y="100" fill="#f59e0b" fontSize="13" fontWeight="bold">t</text>
          <text x="130" y="188" fill="#10b981" fontSize="13" fontWeight="bold">a</text>
        </svg>
      </div>
    </div>
  );
}
