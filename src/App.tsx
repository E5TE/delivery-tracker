import { useState } from 'react'
import Chat from './components/Chat'
import { BoxIcon } from './components/BoxIcon'

function App() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [showChat, setShowChat] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    setShowChat(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingNumber(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {!showChat ? (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
            <div className="flex justify-center mb-6">
              <BoxIcon 
                width={80} 
                height={80} 
                className="text-blue-500 drop-shadow-md" 
              />
            </div>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Let's find your package
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your tracking number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BoxIcon 
                      width={20} 
                      height={20}
                      className="text-gray-400 opacity-60" 
                    />
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter tracking number"
                    value={trackingNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <span>Find Package</span>
                <svg 
                  className="ml-2" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    d="M3 10 L15 10 M10 5 L15 10 L10 15" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <Chat trackingNumber={trackingNumber} />
        </div>
      )}
    </div>
  )
}

export default App
