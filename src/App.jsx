import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'

function App() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [showChat, setShowChat] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    
    // Store tracking number and show chat
    setShowChat(true)
  }

  const handleInputChange = (e) => {
    setTrackingNumber(e.target.value)
  }

  return (
    <div className="app-container">
      {!showChat ? (
        <div className="content-wrapper">
          <div className="tracking-container">
            <div className="main-logo">
              <svg width="80" height="80" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4a90e2" />
                    <stop offset="100%" stopColor="#357abd" />
                  </linearGradient>
                  <filter id="logo-shadow">
                    <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodOpacity="0.3"/>
                  </filter>
                </defs>
                <path
                  d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15z"
                  fill="url(#logo-gradient)"
                  filter="url(#logo-shadow)"
                />
              </svg>
            </div>

            <h1 className="tracking-title">Let's find your package</h1>

            <form onSubmit={handleSubmit} className="tracking-form">
              <div className="input-container">
                <label className="input-label">Enter your tracking number</label>
                <div className="input-wrapper">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    className="input-icon"
                  >
                    <path
                      d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15z"
                      fill="#4a90e2"
                      opacity="0.6"
                    />
                  </svg>
                  <input 
                    type="text" 
                    className="tracking-input"
                    placeholder="Enter tracking number"
                    value={trackingNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="find-button">
                Find Package
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <filter id="arrowShadow">
                      <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  <path d="M3 10 L15 10 M10 5 L15 10 L10 15" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2"
                        filter="url(#arrowShadow)"
                        strokeLinecap="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="content-wrapper">
          <div className="chat-section">
            <Chat trackingNumber={trackingNumber} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
