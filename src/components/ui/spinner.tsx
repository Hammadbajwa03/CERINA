import React from 'react'

function spinner() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/login_pattern.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="text-center z-10">
          <div className="relative mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-rose-200 border-t-rose-500 mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl">💍</div>
            </div>
          </div>
          <p className="text-gray-600 font-medium">Loading your wedding dashboard...</p>
        </div>
      </div>
  )
}

export default spinner