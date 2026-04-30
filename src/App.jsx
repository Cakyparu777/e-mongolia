import { useState } from 'react'
import './App.css'
import idCardFront from './assets/607692426_843446245231969_1449603800468838469_n.jpg'
import idCardBack from './assets/598918111_901306892463898_7558760081298208592_n.jpg'
import emongoliaLogo from './assets/Screenshot 2026-01-06 at 23.56.13.png'
import profilePhoto from './assets/607749840_1367445838395158_9006453263386466026_n.jpg'
import parliamentImg from './assets/parliament_building.png'
import serviceCenterImg from './assets/service_center.png'

function App() {
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

  return (
    <div className="app-container">
      <div className="app-header-sticky">
        {/* Top utility bar */}
        <div className="top-utility-bar">
          <div className="utility-left">
            <a className="utility-link">For Foreigners</a>
            <a className="utility-link">Монгол бичгийн хувилбар</a>
          </div>
          <div className="utility-right">
            <span className="utility-chip">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#f7c948"><path d="M6 19a5 5 0 010-10 7 7 0 0113.5 2.5A4.5 4.5 0 0118 19H6z" /></svg>
              +7.6°C
            </span>
            <span className="utility-chip">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#2bb673"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.8 15.4v1.3h-1.4v-1.3c-1.7-.2-2.9-1.1-3-2.7h1.6c.1.8.7 1.4 2 1.4 1.4 0 1.8-.7 1.8-1.2 0-.7-.4-1.3-2.3-1.7-2.1-.5-3.3-1.3-3.3-2.9 0-1.4 1.1-2.3 2.7-2.6V6.3h1.4v1.4c1.6.4 2.5 1.4 2.6 2.7h-1.6c-.1-.8-.6-1.3-1.7-1.3-1 0-1.7.5-1.7 1.1 0 .6.5 1 2.2 1.5 1.8.4 3.4 1.2 3.4 3.1 0 1.5-1.1 2.4-2.7 2.6z" /></svg>
              3,576₮
            </span>
            <span className="utility-chip">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#3a86ff"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg>
              {formattedDate}
            </span>
          </div>
        </div>

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
                {/* <span className="logo-tagline">Засгийн газрын үйлчилгээ</span> */}
              </button>
            </div>
            <div className="header-actions">
              <button className="profile-pill" onClick={() => setShowProfile(p => !p)}>
                <span className="profile-avatar">
                  <img src={profilePhoto} alt="Profile" />
                </span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#1a1a1a"><path d="M7 10l5 5 5-5z" /></svg>
              </button>
              <button className="icon-btn grid-btn" aria-label="Apps">
                <div className="grid-icon">
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                </div>
              </button>
              <button className="icon-btn accessibility-btn" aria-label="Accessibility">
                <svg viewBox="0 0 24 24" fill="#3a86ff" width="22" height="22">
                  <circle cx="12" cy="5" r="2.5" />
                  <path d="M17 12H7l-1.5 4h11L15 12zM7 12l-2-5h14l-2 5M10 16v4M14 16v4" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div> {/* end app-header-sticky */}

      {/* Main Content */}
      <main className="main-content">
        {/* Hero search section */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <svg className="cloud cloud-1" viewBox="0 0 100 60" fill="none">
              <path d="M20 40 Q10 40 10 30 Q10 20 22 22 Q26 12 38 16 Q50 12 52 24 Q62 24 60 36 Q60 44 48 44 L24 44 Q18 44 20 40Z" stroke="#c9d6ee" strokeWidth="1.5" fill="#dde7f7" opacity="0.7" />
            </svg>
            <svg className="temple" viewBox="0 0 200 160" fill="none">
              <path d="M20 150 L20 110 L40 110 L40 90 L60 90 L60 70 L80 70 L80 50 L100 30 L120 50 L120 70 L140 70 L140 90 L160 90 L160 110 L180 110 L180 150 Z"
                stroke="#c9d6ee" strokeWidth="1.5" fill="#e6edf9" opacity="0.6" />
              <path d="M95 30 L100 18 L105 30" stroke="#c9d6ee" strokeWidth="1.5" fill="#e6edf9" opacity="0.6" />
            </svg>
            <svg className="cloud cloud-2" viewBox="0 0 100 60" fill="none">
              <path d="M20 40 Q10 40 10 30 Q10 20 22 22 Q26 12 38 16 Q50 12 52 24 Q62 24 60 36 Q60 44 48 44 L24 44 Q18 44 20 40Z" stroke="#c9d6ee" strokeWidth="1.5" fill="#dde7f7" opacity="0.7" />
            </svg>
          </div>

          <h1 className="hero-title">Төрийн үйлчилгээ, мэдээллийг нэг дороос...</h1>

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
                placeholder="Үйлчилгээ, хууль, яам, засгийн газрын нэ..."
              />
            </div>
          </div>

          <div className="hero-swirls" aria-hidden="true">
            <svg className="swirl swirl-left" viewBox="0 0 60 60" fill="none">
              <path d="M30 50 Q10 50 10 30 Q10 12 30 12 Q46 12 46 28 Q46 40 34 40 Q24 40 24 30 Q24 22 32 22"
                stroke="#a8bce0" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
            <svg className="swirl swirl-right" viewBox="0 0 60 60" fill="none">
              <path d="M30 50 Q10 50 10 30 Q10 12 30 12 Q46 12 46 28 Q46 40 34 40 Q24 40 24 30 Q24 22 32 22"
                stroke="#a8bce0" strokeWidth="2" fill="none" opacity="0.6" transform="scale(-1,1) translate(-60,0)" />
            </svg>
          </div>
        </section>

        {/* Info cards */}
        <section className="info-cards">
          <div className="info-card info-card-dark" style={{ backgroundImage: `url(${parliamentImg})` }}>
            <div className="info-card-overlay" />
            <div className="info-card-text">
              <h3>Төрийн байгууллагууд</h3>
              <button className="info-card-btn">Дэлгэрэнгүй</button>
            </div>
            <div className="info-card-icons">
              <span className="round-icon round-icon-white">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a">
                  <path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5zm0 12c4 0 8 2 8 6v2H4v-2c0-4 4-6 8-6z" />
                </svg>
              </span>
              <span className="round-icon round-icon-white">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a">
                  <path d="M12 1C8.676 1 6 3.676 6 7s2.676 6 6 6 6-2.676 6-6-2.676-6-6-6zm0 2a4 4 0 110 8 4 4 0 010-8zm-1 9h2v1.17A7.001 7.001 0 0119 20v2H5v-2a7.001 7.001 0 016-6.83V12zm1 2a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="info-card info-card-blue" style={{ backgroundImage: `url(${serviceCenterImg})` }}>
            <div className="info-card-overlay" />
            <div className="info-card-text">
              <h3>Үйлчилгээ авах</h3>
              <button className="info-card-btn">Дэлгэрэнгүй</button>
            </div>
            <div className="info-card-icons">
              <span className="round-icon round-icon-white">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a">
                  <path d="M20 9V7a3 3 0 00-3-3H7a3 3 0 00-3 3v2a2 2 0 00-2 2v3a2 2 0 002 2h1v3a2 2 0 002 2h10a2 2 0 002-2v-3h1a2 2 0 002-2v-3a2 2 0 00-2-2zM9 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8 9V7a1 1 0 011-1h6a1 1 0 011 1v2H8z" />
                </svg>
              </span>
            </div>
          </div>

          {/* E-Learning card */}
          <div className="elearning-card">
            <div className="elearning-text">
              <h3>Цахим сургалт</h3>
              <button className="elearning-btn">Дэлгэрэнгүй</button>
            </div>
            <div className="elearning-art" aria-hidden="true">
              <div className="calendar-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(n => (
                  <span key={n} className="cal-num">{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Easy Access (Хялбар хандалт) */}
        <section className="easy-access">
          <h2 className="easy-access-title">Хялбар хандалт</h2>
          <p className="easy-access-subtitle">Хэрэгтэй мэдээлэлдээ хурдан, хялбар замаар хүрээрэй.</p>
          <div className="easy-access-pills">
            {[
              'Апостиль гэрчилгээ',
              'Төлбөр төлөх',
              'Гэр бүл',
              'Үл хөдлөх хөрөнгө',
              'Нийслэлийн цэцэрлэгийн үр дүн',
              'Зээлийн мэдээлэл',
              'Нийгмийн даатгалын лавлагаа',
              'Тээврийн хэрэгслийн торгууль',
              'Шинжилгээний хариу',
              'Эмнэлгийн цаг захиалах',
              'Дипломын тодорхойлолт',
              'Лавлагаа, тодорхойлолт шалгах',
              'Нийтийн тээврийн тасалбар захиалга',
            ].map((label) => (
              <button key={label} className="pill-btn">{label}</button>
            ))}
          </div>
        </section>

        {/* Хөтөч (Guide) */}
        <section className="guide-section">
          <div className="guide-header">
            <div>
              <h2 className="guide-title">Хөтөч</h2>
              <p className="guide-subtitle">Амьдралынхаа аль ч үед хэрэгтэй бүхнийг хийх, мэдэх хувийн хөтөчтэй байгаарай.</p>
            </div>
            <button className="guide-all-btn">Бүгдийг үзэх</button>
          </div>

          <div className="guide-cards">
            {[
              {
                title: 'Цэргийн алба',
                icon: (
                  <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                    <path d="M14 10 H46 V44 L30 38 L14 44 Z" fill="#9ec6ff" stroke="#3a86ff" strokeWidth="2" />
                    <path d="M22 18 L30 22 L38 18" stroke="#fff" strokeWidth="2.5" fill="none" />
                    <path d="M22 26 L30 30 L38 26" stroke="#fff" strokeWidth="2.5" fill="none" />
                    <path d="M14 44 L18 50 M22 44 L24 52 M30 44 L30 54 M38 44 L36 52 M46 44 L42 50" stroke="#7ab2ff" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: 'Бичиг баримт',
                icon: (
                  <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                    <rect x="20" y="14" width="28" height="36" rx="3" fill="#dbd6f5" stroke="#7e6dd8" strokeWidth="2" />
                    <line x1="26" y1="24" x2="42" y2="24" stroke="#7e6dd8" strokeWidth="2" />
                    <line x1="26" y1="30" x2="42" y2="30" stroke="#7e6dd8" strokeWidth="2" />
                    <line x1="26" y1="36" x2="36" y2="36" stroke="#7e6dd8" strokeWidth="2" />
                    <circle cx="14" cy="30" r="6" fill="#f7c948" stroke="#d49d22" strokeWidth="2" />
                    <rect x="14" y="30" width="10" height="3" fill="#f7c948" stroke="#d49d22" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: 'Хүүхэд',
                icon: (
                  <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                    <path d="M14 18 H26 V14 Q26 10 30 10 Q34 10 34 14 V18 H46 V30 H42 Q38 30 38 34 Q38 38 42 38 H46 V50 H34 V46 Q34 42 30 42 Q26 42 26 46 V50 H14 V38 H18 Q22 38 22 34 Q22 30 18 30 H14 Z" fill="#f25a4f" />
                    <path d="M14 18 H26 V14 Q26 10 30 10 V30 H14 Z" fill="#3a86ff" />
                    <path d="M30 30 H46 V18 H34 V14 Q34 10 30 10 V30 Z" fill="#f7c948" />
                    <path d="M14 30 H30 V50 H14 Z" fill="#2bb673" />
                  </svg>
                ),
              },
              {
                title: 'Гадаад явах',
                icon: (
                  <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                    <circle cx="30" cy="30" r="20" fill="#dbe8ff" stroke="#3a86ff" strokeWidth="2" />
                    <ellipse cx="30" cy="30" rx="20" ry="8" stroke="#3a86ff" strokeWidth="1.5" fill="none" />
                    <path d="M30 10 V50 M10 30 H50" stroke="#3a86ff" strokeWidth="1.5" />
                    <path d="M22 14 Q30 30 22 46 M38 14 Q30 30 38 46" stroke="#3a86ff" strokeWidth="1.5" fill="none" />
                  </svg>
                ),
              },
              {
                title: 'Эрүүл мэнддээ анхаарах',
                icon: (
                  <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                    <path d="M30 50 C16 40 10 28 10 20 Q10 10 20 10 Q26 10 30 16 Q34 10 40 10 Q50 10 50 20 C50 28 44 40 30 50 Z" fill="#f25a4f" />
                    <path d="M22 24 H28 V18 H32 V24 H38 V28 H32 V34 H28 V28 H22 Z" fill="#fff" />
                  </svg>
                ),
              },
              {
                title: 'Зээлийн мэдээлэл',
                icon: (
                  <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                    <path d="M30 12 L34 24 L46 28 L34 32 L30 44 L26 32 L14 28 L26 24 Z" fill="#7ab8ff" />
                    <path d="M44 14 L46 18 L50 20 L46 22 L44 26 L42 22 L38 20 L42 18 Z" fill="#c084fc" />
                  </svg>
                ),
              },
            ].map((item) => (
              <button key={item.title} className="guide-card">
                <span className="guide-card-title">{item.title}</span>
                <span className="guide-card-icon">{item.icon}</span>
              </button>
            ))}
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

      {/* ID modal */}
      {showIdModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Иргэний үнэмлэх</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
              </button>
            </div>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
              <div className="flip-card-inner">
                <div className="flip-card-front"><img src={idCardFront} alt="ID Front" /></div>
                <div className="flip-card-back"><img src={idCardBack} alt="ID Back" /></div>
              </div>
            </div>
            <p className="modal-description">Бичиг баримтын арын хуудсыг харах бол үнэмлэх дээр дарна уу.</p>
            <div className="modal-buttons">
              <button className="btn-primary">Лавлагаа авах</button>
              <button className="btn-outline">Дахин захиалах</button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Page */}
      {showProfile && (
        <div className="profile-page">
          <div className="profile-quick-actions">
            <h2 className="profile-title">Профайл</h2>
            <p className="profile-subtitle">Төрийн байгууллагад бүртгэгдсэн таны мэдээлэл, үйлчилгээний түүх болон хувийн тохиргоог эндээс харах боломжтой.</p>
            <div className="quick-actions-row">
              <button className="quick-action-item">
                <span className="quick-action-icon">🔍</span>
                <span>Хайлт</span>
              </button>
              <button className="quick-action-item">
                <span className="quick-action-icon">💬</span>
                <span>Чат</span>
              </button>
              <button className="quick-action-item">
                <span className="quick-action-icon">🔔</span>
                <span>Мэдэгдэл</span>
              </button>
              <button className="quick-action-item">
                <span className="quick-action-icon">👜</span>
                <span>Хэтэвч</span>
              </button>
            </div>
          </div>

          <div className="profile-menu-grid">
            {[
              { icon: '📁', label: 'Төрд байгаа миний мэдээлэл', action: () => { setShowMyInfo(true); setShowProfile(false); } },
              { icon: '📋', label: 'Бичиг баримт' },
              { icon: '✉️', label: 'Үндэсний шуудан' },
              { icon: '📄', label: 'Үйлчилгээний түүх' },
              { icon: '🏅', label: 'Талархал' },
              { icon: '✅', label: 'Баталгаажуулалт' },
              { icon: '📝', label: 'Өргөдөл, гомдол' },
              { icon: '⚙️', label: 'Тохиргоо' },
            ].map((item, i) => (
              <button key={i} className="profile-menu-item" onClick={item.action}>
                <span className="profile-menu-icon">{item.icon}</span>
                <span className="profile-menu-label">{item.label}</span>
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
      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <div className="nav-icon home-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
          </div>
          <span>Нүүр</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" /></svg>
          </div>
          <span>Үйлчилгээ</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" /></svg>
          </div>
          <span>Мэдээ</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'organizations' ? 'active' : ''}`}
          onClick={() => setActiveTab('organizations')}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>
          </div>
          <span>Байгууллага</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'other' ? 'active' : ''}`}
          onClick={() => setActiveTab('other')}
        >
          <div className="nav-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" /></svg>
          </div>
          <span>Бусад</span>
        </button>
      </nav>
    </div>
  )
}

export default App
