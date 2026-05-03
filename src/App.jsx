import { useState, useEffect, useRef } from 'react'
import './App.css'
import idCardFront from './assets/607692426_843446245231969_1449603800468838469_n.jpg'
import idCardBack from './assets/598918111_901306892463898_7558760081298208592_n.jpg'
import emongoliaLogo from './assets/Screenshot 2026-01-06 at 23.56.13.png'
import profilePhoto from './assets/607749840_1367445838395158_9006453263386466026_n.jpg'
import parliamentImg from './assets/parliament_building.png'
import serviceCenterImg from './assets/service_center.png'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState(false)
  const pinInputRef = useRef(null)
  const [activeTab, setActiveTab] = useState('home')
  const [showProfile, setShowProfile] = useState(false)
  const [showMyInfo, setShowMyInfo] = useState(false)
  const [activeInfoTab, setActiveInfoTab] = useState('myinfo')
  const [showIdModal, setShowIdModal] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const today = new Date()
  const formattedDate = `${today.getMonth() + 1} сарын ${today.getDate()}`

  const handleCloseModal = () => {
    setShowIdModal(false)
    setIsFlipped(false)
  }

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === '0102') {
        setIsAuthenticated(true)
        setPinError(false)
      } else {
        setPinError(true)
        const t = setTimeout(() => { setPin(''); setPinError(false) }, 600)
        return () => clearTimeout(t)
      }
    }
  }, [pin])

  if (!isAuthenticated) {
    return (
      <div className="auth-screen" onClick={() => pinInputRef.current?.focus()}>
        <h2 className="auth-title">Та пин кодоо оруулан системд нэвтэрнэ үү</h2>
        <div className={`auth-pin-row ${pinError ? 'shake' : ''}`}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`auth-pin-box ${pin.length === i ? 'active' : ''} ${pin.length > i ? 'filled' : ''} ${pinError ? 'error' : ''}`}
            >
              {pin.length > i && <span className="auth-pin-dot" />}
            </div>
          ))}
        </div>
        <input
          ref={pinInputRef}
          className="auth-pin-input"
          type="tel"
          inputMode="numeric"
          autoComplete="one-time-code"
          autoFocus
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
          maxLength={4}
        />
        <div className="auth-links">
          <a className="auth-link">Пин кодоо мартсан?</a>
          <a className="auth-link">Өөр хэрэглэгчээр нэвтрэх</a>
        </div>
        <button className="auth-sos">SOS</button>
      </div>
    )
  }

  return (
    <div className="app-container">
      {!showProfile && !showMyInfo && (
        <div className="app-header-sticky">
          {/* Header */}
          <header className="header">
            <div className="header-row">
              <div className="header-left">
                <button
                  className="logo-wrap"
                  onClick={() => {
                    setShowProfile(false)
                    setShowMyInfo(false)
                    setShowIdModal(false)
                    setIsFlipped(false)
                    setActiveTab('home')
                  }}
                  aria-label="Go to home"
                >
                  <img src={emongoliaLogo} alt="e-mongolia" className="logo-image" />
                </button>
              </div>
              <div className="header-actions">
                <button className="header-icon-btn" aria-label="Notifications">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 16v-5a6 6 0 10-12 0v5l-2 2v1h16v-1l-2-2z" />
                    <path d="M10 21a2 2 0 004 0" />
                  </svg>
                </button>
                <button className="header-icon-btn" aria-label="Menu" onClick={() => setShowProfile(p => !p)}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3a86ff" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="13" x2="20" y2="13" />
                    <line x1="4" y1="19" x2="20" y2="19" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content home-v2">
        {/* Hero */}
        <section className="hero hero-v2">
          <div className="hero-bg" aria-hidden="true">
            <svg className="cloud cloud-1" viewBox="0 0 100 60" fill="none">
              <path d="M20 40 Q10 40 10 30 Q10 20 22 22 Q26 12 38 16 Q50 12 52 24 Q62 24 60 36 Q60 44 48 44 L24 44 Q18 44 20 40Z" stroke="#c9d6ee" strokeWidth="1.5" fill="#dde7f7" opacity="0.7" />
            </svg>
            <svg className="cloud cloud-2" viewBox="0 0 100 60" fill="none">
              <path d="M20 40 Q10 40 10 30 Q10 20 22 22 Q26 12 38 16 Q50 12 52 24 Q62 24 60 36 Q60 44 48 44 L24 44 Q18 44 20 40Z" stroke="#c9d6ee" strokeWidth="1.5" fill="#dde7f7" opacity="0.7" />
            </svg>
            <svg className="hero-pattern" viewBox="0 0 320 200" fill="none" preserveAspectRatio="xMidYMid slice">
              <g opacity="0.18" stroke="#a8bce0" strokeWidth="1.4" fill="none">
                <path d="M40 170 Q60 130 40 110 Q20 90 40 70" />
                <path d="M80 180 Q100 140 80 120 Q60 100 80 80" />
                <path d="M160 180 Q160 140 180 130 Q200 120 200 100 Q200 80 180 70 Q160 60 160 40" />
                <path d="M240 170 Q220 130 240 110 Q260 90 240 70" />
                <path d="M280 180 Q260 140 280 120 Q300 100 280 80" />
              </g>
            </svg>
          </div>
          <h1 className="hero-title hero-title-v2">Төрийн үйлчилгээ, мэдээллийг нэг дороос</h1>
          <div className="search-wrapper">
            <div className="search-bar">
              <button className="search-mic" aria-label="Voice search">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <rect x="4" y="9" width="2" height="6" rx="1" fill="#3a86ff" />
                  <rect x="8" y="6" width="2" height="12" rx="1" fill="#8b5cf6" />
                  <rect x="12" y="4" width="2" height="16" rx="1" fill="#3a86ff" />
                  <rect x="16" y="7" width="2" height="10" rx="1" fill="#8b5cf6" />
                  <rect x="20" y="10" width="2" height="4" rx="1" fill="#3a86ff" />
                </svg>
              </button>
              <input
                className="search-input"
                placeholder="Үйлчилгээ хайх"
              />
            </div>
          </div>
        </section>

        {/* Info chips row */}
        <section className="info-chips" aria-label="Today info">
          <button className="info-chip">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#7ab8ff"><path d="M6 19a5 5 0 010-10 7 7 0 0113.5 2.5A4.5 4.5 0 0118 19H6z" /></svg>
            <span>Шөнө 6° C</span>
          </button>
          <button className="info-chip">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#3a86ff"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /><text x="12" y="17" textAnchor="middle" fontSize="7" fill="#3a86ff" fontWeight="700">31</text></svg>
            <span>Цагалбар</span>
          </button>
          <button className="info-chip">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#2bb673"><path d="M2 7h20v10H2z" opacity="0.25" /><path d="M2 7h20v10H2zm2 2v6h16V9H4zm8 1a2 2 0 110 4 2 2 0 010-4z" fill="#2bb673" /></svg>
            <span>3,576.11 ₮</span>
          </button>
        </section>

        {/* Хөтөч (horizontal scroll) */}
        <section className="guide-v2">
          <div className="guide-v2-header">
            <h2>Хөтөч</h2>
            <button className="guide-v2-all">Бүгд <span>›</span></button>
          </div>
          <div className="guide-v2-scroll">
            {[
              {
                title: 'Цэргийн алба', bg: '#dbeaff', icon: (
                  <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
                    <path d="M14 10 H46 V44 L30 38 L14 44 Z" fill="#9ec6ff" stroke="#3a86ff" strokeWidth="2" />
                    <path d="M22 18 L30 22 L38 18 M22 26 L30 30 L38 26" stroke="#fff" strokeWidth="2.5" fill="none" />
                    <path d="M14 44 L18 52 M22 44 L24 54 M30 44 L30 56 M38 44 L36 54 M46 44 L42 52" stroke="#7ab2ff" strokeWidth="1.5" />
                  </svg>
                )
              },
              {
                title: 'Бичиг баримт', bg: '#fde0d3', icon: (
                  <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
                    <rect x="20" y="14" width="28" height="36" rx="3" fill="#fff5ee" stroke="#e08864" strokeWidth="2" />
                    <line x1="26" y1="24" x2="42" y2="24" stroke="#e08864" strokeWidth="2" />
                    <line x1="26" y1="30" x2="42" y2="30" stroke="#e08864" strokeWidth="2" />
                    <line x1="26" y1="36" x2="36" y2="36" stroke="#e08864" strokeWidth="2" />
                    <circle cx="14" cy="30" r="6" fill="#f7c948" stroke="#d49d22" strokeWidth="2" />
                    <rect x="14" y="30" width="10" height="3" fill="#f7c948" stroke="#d49d22" strokeWidth="1.5" />
                  </svg>
                )
              },
              {
                title: 'Хүүхэд', bg: '#fff1c2', icon: (
                  <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
                    <rect x="14" y="18" width="14" height="14" fill="#3a86ff" />
                    <rect x="32" y="14" width="14" height="14" fill="#f7c948" />
                    <rect x="32" y="32" width="14" height="14" fill="#f25a4f" />
                    <rect x="14" y="36" width="14" height="14" fill="#2bb673" />
                  </svg>
                )
              },
              {
                title: 'Гадаад явах', bg: '#dbe8ff', icon: (
                  <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
                    <circle cx="30" cy="30" r="20" fill="#fff" stroke="#3a86ff" strokeWidth="2" />
                    <ellipse cx="30" cy="30" rx="20" ry="8" stroke="#3a86ff" strokeWidth="1.5" fill="none" />
                    <path d="M30 10 V50 M10 30 H50" stroke="#3a86ff" strokeWidth="1.5" />
                  </svg>
                )
              },
              {
                title: 'Эрүүл мэнд', bg: '#ffd9d9', icon: (
                  <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
                    <path d="M30 50 C16 40 10 28 10 20 Q10 10 20 10 Q26 10 30 16 Q34 10 40 10 Q50 10 50 20 C50 28 44 40 30 50Z" fill="#f25a4f" />
                    <path d="M22 24 H28 V18 H32 V24 H38 V28 H32 V34 H28 V28 H22Z" fill="#fff" />
                  </svg>
                )
              },
            ].map((c) => (
              <button key={c.title} className="guide-v2-card" style={{ background: c.bg }}>
                <span className="guide-v2-title">{c.title}</span>
                <span className="guide-v2-icon">{c.icon}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Promo card (Зөрчлийн торгуулийн төлбөр төлөх) */}
        <section className="promo-section">
          <div className="promo-dots" aria-hidden="true">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="promo-card">
            <div className="promo-art" aria-hidden="true">
              <svg viewBox="0 0 80 90" width="90" height="100" fill="none">
                <rect x="20" y="14" width="44" height="60" rx="4" fill="#fff" />
                <rect x="26" y="22" width="22" height="3" rx="1" fill="#9ec6ff" />
                <rect x="26" y="30" width="32" height="3" rx="1" fill="#9ec6ff" />
                <rect x="26" y="38" width="22" height="3" rx="1" fill="#9ec6ff" />
                <rect x="26" y="46" width="28" height="3" rx="1" fill="#9ec6ff" />
                <circle cx="14" cy="78" r="6" fill="#f7c948" stroke="#d49d22" strokeWidth="1.5" />
                <circle cx="68" cy="80" r="5" fill="#f7c948" stroke="#d49d22" strokeWidth="1.5" />
                <path d="M6 12 L8 16 L12 18 L8 20 L6 24 L4 20 L0 18 L4 16Z" fill="#f7c948" />
                <path d="M70 8 L72 12 L76 14 L72 16 L70 20 L68 16 L64 14 L68 12Z" fill="#f7c948" />
              </svg>
            </div>
            <h3 className="promo-title">ЗӨРЧЛИЙН ТОРГУУЛИЙН ТӨЛБӨР ТӨЛӨХ</h3>
            <div className="promo-bot" aria-hidden="true">
              <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
                <rect x="12" y="20" width="36" height="26" rx="6" fill="#3a86ff" />
                <circle cx="22" cy="32" r="3" fill="#fff" />
                <circle cx="38" cy="32" r="3" fill="#fff" />
                <path d="M22 38 H38" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 20 V14 M26 12 H34" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="30" cy="11" r="2" fill="#3a86ff" />
              </svg>
            </div>
          </div>
        </section>

        {/* Open Data (Нээлттэй мэдээлэл) */}
        <section className="open-data">
          <h2 className="open-data-title">Нээлттэй мэдээлэл</h2>

          <div className="data-card data-card-wide population-card">
            <p className="data-label">Хүн амын тоо</p>
            <p className="data-value">3,544,835 <span className="flag-mn">🇲🇳</span></p>
            <svg className="population-bg" viewBox="0 0 320 120" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g fill="#dde7f7" stroke="#c9d6ee" strokeWidth="1">
                <path d="M40 30 L80 20 L130 30 L160 25 L200 35 L250 30 L290 40 L290 80 L240 90 L200 85 L160 95 L120 90 L80 100 L40 90 Z" />
                <path d="M50 50 L90 45 L120 55 L150 50 L180 60 L210 55 L240 65 L240 80 L200 78 L170 82 L140 78 L100 84 L60 80 Z" fill="#cfdbf2" />
              </g>
            </svg>
          </div>

          <div className="data-grid">
            <div className="data-col">
              <div className="data-card data-card-tall">
                <p className="data-label">Инфляцын түвшин</p>
                <svg className="data-sparkline" viewBox="0 0 200 60" fill="none" aria-hidden="true">
                  <path d="M0 40 L20 35 L40 38 L60 32 L80 30 L100 22 L110 8 L120 28 L140 24 L160 30 L180 26 L200 28" stroke="#7ab8ff" strokeWidth="2" fill="none" />
                  <path d="M0 40 L20 35 L40 38 L60 32 L80 30 L100 22 L110 8 L120 28 L140 24 L160 30 L180 26 L200 28 L200 60 L0 60 Z" fill="url(#infl-grad)" opacity="0.4" />
                  <defs>
                    <linearGradient id="infl-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7ab8ff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#7ab8ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="data-value">7.5 %</p>
              </div>

              <div className="data-card data-card-tall accent-left">
                <p className="data-label">Дотоодын нийт бүтээгдэхүүн</p>
                <p className="data-value highlight">89.9 их наяд</p>
              </div>

              <div className="data-card">
                <p className="data-label">Дундаж цалин</p>
                <p className="data-value">2.3 сая</p>
                <span className="data-emoji">💼</span>
              </div>
            </div>

            <div className="data-col">
              <div className="data-card">
                <p className="data-label">Ажилгүйдлийн түвшин</p>
                <p className="data-value">5.6 %</p>
                <span className="data-emoji">🔍</span>
              </div>

              <div className="data-card">
                <p className="data-label">Ажиллах хүчний оролцоо</p>
                <p className="data-value">62.3 %</p>
                <span className="data-emoji">🤝</span>
              </div>

              <div className="data-card">
                <p className="data-label">Малын тоо</p>
                <p className="data-value">58.1 сая</p>
                <span className="data-emoji">🐄</span>
              </div>

              <div className="data-card">
                <p className="data-label">Өрхийн дундаж орлого</p>
                <p className="data-value">3.0 сая</p>
                <span className="data-emoji">💰</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (shown on all pages) */}
      <footer className="site-footer">
        <div className="footer-top">
          <img src={emongoliaLogo} alt="e-mongolia" className="footer-logo" />
          <div className="footer-store-badges">
            <a className="store-badge" aria-label="Download on the App Store">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M17.05 12.04c-.03-2.55 2.08-3.78 2.18-3.84-1.19-1.74-3.04-1.98-3.7-2-1.57-.16-3.07.93-3.87.93-.81 0-2.04-.91-3.36-.88-1.72.02-3.32 1-4.21 2.55-1.8 3.13-.46 7.74 1.29 10.27.86 1.24 1.88 2.63 3.21 2.58 1.29-.05 1.78-.83 3.34-.83 1.55 0 2 .83 3.36.81 1.39-.02 2.27-1.26 3.13-2.5 1.01-1.43 1.42-2.83 1.44-2.91-.03-.01-2.76-1.06-2.79-4.18zM14.69 4.7c.71-.86 1.19-2.05 1.05-3.24-1.02.04-2.25.68-2.99 1.54-.66.76-1.24 1.97-1.08 3.13 1.13.09 2.29-.58 3.02-1.43z" /></svg>
              <span className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a className="store-badge" aria-label="Get it on Google Play">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M3 2.5l11 9.5-11 9.5V2.5z" fill="#34a853" /><path d="M3 2.5L14 12 3 21.5z" fill="#fbbc04" opacity=".7" /><path d="M14 12l5-3-3-2-2 2v3z" fill="#ea4335" /><path d="M14 12l2 2 3-2-5-3v3z" fill="#4285f4" /></svg>
              <span className="store-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Тусламж</h4>
            <a>Knowledge Graph</a>
            <a>Түгээмэл асуулт, хариулт</a>
          </div>
          <div className="footer-col">
            <h4>Бусад</h4>
            <a>Чингис хааны иш хөрөг</a>
            <a>Төрийн албан хаагч цэс</a>
            <a>Лавлагаа шалгах</a>
            <a>АТГ-д хандах</a>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Бидний тухай</h4>
            <a>И-Монгол Академи</a>
            <a>ЦХИХХЯ-ний тухай</a>
            <a>Системийн тухай</a>
            <a>Үйлчилгээний нөхцөл</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-social">
          <a aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" /></svg>
          </a>
          <a aria-label="X">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M18.9 3H22l-7.6 8.7L23 21h-7l-5.5-7.2L4.2 21H1.1l8.1-9.3L1 3h7.2l5 6.6L18.9 3zm-1.1 16h1.7L7.3 4.9H5.5L17.8 19z" /></svg>
          </a>
          <a aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.2" fill="#fff" /></svg>
          </a>
          <a aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M23 7.2s-.2-1.5-.9-2.2c-.8-.9-1.7-.9-2.2-1C16.6 3.8 12 3.8 12 3.8s-4.6 0-7.9.2c-.5.1-1.4.1-2.2 1C1.2 5.7 1 7.2 1 7.2S.8 9 .8 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.7.2 7.7.2s4.6 0 7.9-.3c.5-.1 1.4-.1 2.2-1 .7-.7.9-2.2.9-2.2s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.7 14.4V8l6 3.2-6 3.2z" /></svg>
          </a>
        </div>

        <p className="footer-copy">© Бүх эрх хуулиар хамгаалагдсан 2026</p>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fab-group">
        <button className="fab-btn" aria-label="Support">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a"><path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5zm0 12c4 0 8 2 8 6v2H4v-2c0-4 4-6 8-6z" /><circle cx="19" cy="7" r="4" fill="#3a86ff" /><text x="19" y="10" textAnchor="middle" fontSize="6" fill="white">i</text></svg>
        </button>
        <button className="fab-btn" aria-label="Headset">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a"><path d="M12 1a9 9 0 00-9 9v3a3 3 0 003 3h1V12H5v-2a7 7 0 0114 0v2h-2v4h1a3 3 0 003-3v-3a9 9 0 00-9-9z" /></svg>
        </button>
        <button className="fab-btn" aria-label="Bot">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a"><rect x="4" y="8" width="16" height="11" rx="3" stroke="#1a1a1a" strokeWidth="1.5" fill="none" /><circle cx="9" cy="14" r="1.5" fill="#1a1a1a" /><circle cx="15" cy="14" r="1.5" fill="#1a1a1a" /><path d="M12 8V5M10 5h4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
        <button
          className="fab-btn fab-back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* ID modal — bottom sheet */}
      {showIdModal && (
        <div className="sheet-overlay" onClick={handleCloseModal}>
          <div className="sheet-content" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle" aria-hidden="true" />
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
              <div className="flip-card-inner">
                <div className="flip-card-front"><img src={idCardFront} alt="ID Front" /></div>
                <div className="flip-card-back"><img src={idCardBack} alt="ID Back" /></div>
              </div>
            </div>
            <div className="sheet-buttons">
              <button className="sheet-btn-primary">Лавлагаа авах</button>
              <button className="sheet-btn-outline">Дахин захиалах</button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Page */}
      {showProfile && (
        <div className="profile-page profile-v2">
          {/* User identity card */}
          <button className="profile-id-card" onClick={() => { setActiveInfoTab('myinfo'); setShowMyInfo(true); setShowProfile(false); }}>
            <div className="profile-id-photo-wrap">
              <img src={profilePhoto} alt="Profile" />
              <span className="profile-id-flag" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14"><rect width="24" height="24" rx="3" fill="#c8102e" /><rect x="9" width="6" height="24" fill="#0066b3" /><circle cx="12" cy="12" r="2" fill="#ffd700" /></svg>
              </span>
            </div>
            <div className="profile-id-text">
              <h3 className="profile-id-name">Э.Нарангуа</h3>
              <p className="profile-id-email">213535645767@e-mongolia.mn</p>
            </div>
            <span className="profile-id-arrow" aria-hidden="true">›</span>
          </button>

          {/* Service counter banner */}
          <div className="service-counter">
            <p className="service-counter-text">
              Та нийт <strong>46</strong> үйлчилгээ авч дараах хэмнэлтийг хийсэн байна.
            </p>
            <button className="service-counter-btn" aria-label="Дэлгэрэнгүй">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#3a86ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <svg className="service-counter-tree" viewBox="0 0 90 90" width="80" height="80" aria-hidden="true">
              <ellipse cx="45" cy="40" rx="32" ry="34" fill="#7fcc7f" opacity="0.45" />
              <ellipse cx="35" cy="32" rx="22" ry="24" fill="#a3da8c" opacity="0.6" />
              <rect x="40" y="60" width="10" height="22" rx="3" fill="#7b4a2e" opacity="0.5" />
            </svg>
          </div>

          {/* My documents section */}
          <div className="my-docs">
            <div className="my-docs-header">
              <h2 className="my-docs-title">Миний бичиг баримтууд</h2>
              <button className="my-docs-refresh">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                </svg>
                Шинэчлэх
              </button>
            </div>
            <div className="docs-carousel">
              <div className="doc-card doc-card-side">
                <img src={idCardFront} alt="ID side" />
              </div>
              <div className="doc-card doc-card-main" onClick={() => setShowIdModal(true)}>
                <img src={idCardFront} alt="Citizen ID" />
              </div>
              <div className="doc-card doc-card-side">
                <img src={idCardBack} alt="ID side" />
              </div>
            </div>
            <button className="docs-view-all">Бүх бичиг баримтыг харах</button>
          </div>

          {/* Menu list */}
          <div className="profile-menu-list">
            {[
              {
                bg: '#fff1e8', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#f08a5d"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></svg>
                ),
                label: 'Төрд байгаа миний мэдээлэл',
                action: () => { setActiveInfoTab('myinfo'); setShowMyInfo(true); setShowProfile(false); }
              },
              {
                bg: '#dbeaff', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="14" rx="2" /><path d="M2 10h20" /><circle cx="17" cy="15" r="1.5" fill="#3a86ff" /></svg>
                ),
                label: 'Цахим хэтэвч'
              },
              {
                bg: '#e7f0ff', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 109-9" /><polyline points="3 4 3 12 11 12" /><path d="M12 7v5l3 3" /></svg>
                ),
                label: 'Үйлчилгээний түүх'
              },
              {
                bg: '#fff1e8', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#f08a5d"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" fill="#fff" stroke="#f08a5d" strokeWidth="1.5" /></svg>
                ),
                label: 'Бичиг баримт',
                action: () => { setActiveInfoTab('docs'); setShowMyInfo(true); setShowProfile(false); }
              },
              {
                bg: '#fff8db', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#f7c948"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg>
                ),
                label: 'Талархал'
              },
              {
                bg: '#dcf5e3', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2bb673" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                ),
                label: 'Баталгаажуулалт'
              },
              {
                bg: '#ede5ff', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7e6dd8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 113 3L7 19l-4 1 1-4z" /></svg>
                ),
                label: 'Өргөдөл, гомдол'
              },
              {
                bg: '#eef2f7', icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
                ),
                label: 'Тохиргоо'
              },
            ].map((item, i) => (
              <button key={i} className="profile-menu-row" onClick={item.action}>
                <span className="profile-menu-row-icon" style={{ background: item.bg }}>{item.icon}</span>
                <span className="profile-menu-row-label">{item.label}</span>
                <span className="profile-menu-row-arrow">›</span>
              </button>
            ))}
          </div>

          <button className="logout-btn" onClick={() => setShowProfile(false)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" /></svg>
            Системээс гарах
          </button>
        </div>
      )}



      {/* My Info Page */}
      {showMyInfo && (
        <div className="profile-page myinfo-page">
          <h2 className="profile-title">Профайл</h2>

          {/* Eco stats card */}
          <div className="eco-card">
            <div className="eco-trees-left" aria-hidden="true">
              <svg viewBox="0 0 140 200" width="140" height="200">
                <ellipse cx="70" cy="95" rx="58" ry="68" fill="#5fb55f" />
                <ellipse cx="55" cy="70" rx="42" ry="48" fill="#74c574" />
                <ellipse cx="80" cy="55" rx="32" ry="36" fill="#8ad28a" />
                <ellipse cx="38" cy="105" rx="30" ry="36" fill="#4ea84e" />
                <rect x="62" y="155" width="18" height="42" rx="5" fill="#7b4a2e" />
                <rect x="32" y="150" width="14" height="40" rx="4" fill="#6e3f25" />
              </svg>
            </div>
            <div className="eco-stats-center">
              <p className="eco-headline">
                Нийт <strong>17,000</strong> 🌳 <strong>1.4 сая тонн</strong> 💧
              </p>
              <p className="eco-subtext">хэмнэн эх дэлхийгээ хайрлахад хувь нэмрээ оруулсан танд баярлалаа.</p>
              <div className="eco-numbers">
                <div className="eco-stat"><span className="eco-val">46</span><small>үйлчилгээ</small></div>
                <div className="eco-stat"><span className="eco-val">917,562₮</span><small>төгрөг</small></div>
                <div className="eco-stat"><span className="eco-val">105 цаг 48 мин</span><small>хугацаа</small></div>
              </div>
            </div>
            <div className="eco-trees-right" aria-hidden="true">
              <svg viewBox="0 0 140 200" width="140" height="200">
                <ellipse cx="70" cy="95" rx="58" ry="68" fill="#5fb55f" />
                <ellipse cx="85" cy="70" rx="42" ry="48" fill="#74c574" />
                <ellipse cx="60" cy="55" rx="32" ry="36" fill="#8ad28a" />
                <ellipse cx="102" cy="105" rx="30" ry="36" fill="#4ea84e" />
                <rect x="60" y="155" width="18" height="42" rx="5" fill="#7b4a2e" />
                <rect x="94" y="150" width="14" height="40" rx="4" fill="#6e3f25" />
              </svg>
            </div>
          </div>

          {/* User profile card */}
          <div className="user-profile-card">
            <div className="user-photo-wrap">
              <img src={profilePhoto} alt="Profile" className="user-photo" />
              <span className="user-photo-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#c8102e">
                  <rect width="24" height="24" rx="3" fill="#c8102e" />
                  <rect x="9" y="0" width="6" height="24" fill="#0066b3" />
                  <circle cx="12" cy="12" r="2" fill="#ffd700" />
                </svg>
              </span>
            </div>
            <div className="user-info">
              <h3 className="user-name">Эрхэмбаатар Нарангуа</h3>
              <p className="user-email">210141292961@e-mongolia.mn</p>
            </div>
            <button className="user-settings-btn" aria-label="Settings">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96a6.94 6.94 0 00-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
              </svg>
            </button>
          </div>

          {/* Tab row */}
          <div className="info-tab-row">
            <button
              className={`info-tab ${activeInfoTab === 'myinfo' ? 'active' : ''}`}
              onClick={() => setActiveInfoTab('myinfo')}
            >Төрд байгаа миний мэдээлэл</button>
            <button
              className={`info-tab ${activeInfoTab === 'docs' ? 'active' : ''}`}
              onClick={() => setActiveInfoTab('docs')}
            >Бичиг баримт</button>
            <button className="info-tab-arrow">›</button>
          </div>

          {/* Refresh button */}
          <button className="refresh-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#1a1a1a">
              <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
            Шинэчлэх
          </button>

          {/* ID Card */}
          <div className="id-card-display" onClick={() => setShowIdModal(true)}>
            <img src={idCardFront} alt="Иргэний үнэмлэх" />
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="bottom-nav bottom-nav-v2">
        <button
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => {
            setShowProfile(false); setShowMyInfo(false); setActiveTab('home')
          }}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3z" /></svg>
          </div>
          <span>Нүүр</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="2" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>
          </div>
          <span>Үйлчилгээ</span>
        </button>
        <button
          className="nav-item nav-fab"
          onClick={() => setActiveTab('scan')}
          aria-label="QR Scan"
        >
          <span className="nav-fab-circle">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="16" y="16" width="2" height="2" />
              <rect x="14" y="14" width="2" height="2" />
              <rect x="14" y="19" width="2" height="2" />
              <rect x="19" y="14" width="2" height="2" />
              <rect x="19" y="19" width="2" height="2" />
            </svg>
          </span>
        </button>
        <button
          className={`nav-item ${activeTab === 'extras' ? 'active' : ''}`}
          onClick={() => setActiveTab('extras')}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7 L12 3 L21 7 V11 C21 16 17 20 12 21 C7 20 3 16 3 11 Z" /></svg>
          </div>
          <span>Нэмэлт</span>
        </button>
        <button
          className={`nav-item ${(showProfile || showMyInfo) ? 'active' : ''}`}
          onClick={() => { setShowProfile(p => !p); setShowMyInfo(false) }}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
          </div>
          <span>Профайл</span>
        </button>
      </nav>
    </div>
  )
}

export default App
