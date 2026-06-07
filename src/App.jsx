import { useState } from "react";
import "./index.css";

import TicTacToe from "./pages/tic-tac-toe/TicTacToe";
import Counter from "./pages/counter/Counter";
import Lingkaran from "./pages/lingkaran/Lingkaran";
import Segitiga from "./pages/segitiga/Segitiga";
import Persegi from "./pages/persegi/Persegi";
import Kubus from "./pages/kubus/Kubus";
import Tabung from "./pages/tabung/Tabung";

const PAGES = [
  {
    id: "tictactoe",
    label: "Tic Tac Toe",
    icon: "🎮",
    badge: "GAME",
    component: <TicTacToe />,
    section: "Game",
  },
  {
    id: "counter",
    label: "Aplikasi Counter",
    icon: "🔢",
    badge: null,
    component: <Counter />,
    section: "Aplikasi",
  },
  {
    id: "lingkaran",
    label: "Lingkaran",
    icon: "⭕",
    badge: null,
    component: <Lingkaran />,
    section: "Geometri",
  },
  {
    id: "segitiga",
    label: "Segitiga",
    icon: "🔺",
    badge: null,
    component: <Segitiga />,
    section: "Geometri",
  },
  {
    id: "persegi",
    label: "Persegi",
    icon: "⬛",
    badge: null,
    component: <Persegi />,
    section: "Geometri",
  },
  {
    id: "kubus",
    label: "Kubus",
    icon: "🎲",
    badge: null,
    component: <Kubus />,
    section: "Geometri",
  },
  {
    id: "tabung",
    label: "Tabung",
    icon: "🥫",
    badge: null,
    component: <Tabung />,
    section: "Geometri",
  },
];

const sections = ["Game", "Aplikasi", "Geometri"];

export default function App() {
  const [activePage, setActivePage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentPage = PAGES.find((p) => p.id === activePage);

  const handleNav = (id) => {
    setActivePage(id);
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <h2>⚡ ReactLab</h2>
          <p>Koleksi Aplikasi React Interaktif</p>
        </div>

        {sections.map((section) => (
          <div key={section}>
            <div className="sidebar-section-label">{section}</div>
            <nav className="sidebar-nav">
              {PAGES.filter((p) => p.section === section).map((page) => (
                <div
                  key={page.id}
                  className={`nav-item ${activePage === page.id ? "active" : ""}`}
                  onClick={() => handleNav(page.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleNav(page.id)}
                >
                  <span className="nav-icon">{page.icon}</span>
                  <span className="nav-label">{page.label}</span>
                  {page.badge && <span className="nav-badge">{page.badge}</span>}
                </div>
              ))}
            </nav>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
              <span />
              <span />
              <span />
            </button>
            <div className="topbar-title">
              {currentPage ? (
                <>
                  <span>{currentPage.icon}</span>
                  <span>{currentPage.label}</span>
                </>
              ) : (
                <>⚡ ReactLab</>
              )}
            </div>
          </div>
          <span className="topbar-breadcrumb">
            {currentPage ? `${currentPage.section} › ${currentPage.label}` : "Pilih aplikasi dari menu"}
          </span>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {!activePage ? (
            <div className="welcome-screen">
              <div className="welcome-emoji">⚡</div>
              <h1>ReactLab</h1>
              <p>Koleksi aplikasi React interaktif. Pilih salah satu dari menu samping untuk mulai!</p>
              <div className="welcome-cards">
                {PAGES.map((page) => (
                  <div
                    key={page.id}
                    className="welcome-card"
                    onClick={() => handleNav(page.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleNav(page.id)}
                  >
                    <div className="card-emoji">{page.icon}</div>
                    <div className="card-name">{page.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            currentPage?.component
          )}
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            zIndex: 99, display: "none"
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
