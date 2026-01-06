import { useState } from 'react'
import './App.css'
import idCardFront from './assets/607692426_843446245231969_1449603800468838469_n.jpg'
import idCardBack from './assets/598918111_901306892463898_7558760081298208592_n.jpg'
import emongoliaLogo from './assets/Screenshot 2026-01-06 at 23.56.13.png'
import profilePhoto from './assets/607749840_1367445838395158_9006453263386466026_n.jpg'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [showModal, setShowModal] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
    setIsFlipped(false)
  }

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-row">
          <div className="logo-container">
            <img src={emongoliaLogo} alt="e-mongolia" className="logo-image" />
          </div>
          <div className="header-actions">
            <div className="profile-avatar">
              <img src={profilePhoto} alt="Profile" />
            </div>
            <button className="icon-btn grid-btn">
              <div className="grid-icon">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
            </button>
            <button className="icon-btn accessibility-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <circle cx="12" cy="4" r="2" />
                <path d="M12 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 2c2.67 0 8 1.34 8 4v3H4v-3c0-2.66 5.33-4 8-4zm-2 6h4v6h-4v-6z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Refresh Button */}
      <button className="refresh-btn">
        <span className="refresh-icon">↻</span>
        <span>Шинэчлэх</span>
      </button>

      {/* Main Content - ID Card Images */}
      <main className="main-content">
        {/* ID Card Image */}
        <div className="id-card-image" onClick={() => setShowModal(true)}>
          <img src={idCardFront} alt="Citizen ID Card" />
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Иргэний үнэмлэх</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
              </button>
            </div>

            <div
              className={`flip-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={idCardFront} alt="Citizen ID Card Front" />
                </div>
                <div className="flip-card-back">
                  <img src={idCardBack} alt="Citizen ID Card Back" />
                </div>
              </div>
            </div>

            <p className="modal-description">
              Бичиг баримтын арын хуудсыг харах бол үнэмлэх дээр дарна уу.
            </p>

            <div className="modal-buttons">
              <button className="btn-primary">Лавлагаа авах</button>
              <button className="btn-outline">Дахин захиалах</button>
            </div>
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
