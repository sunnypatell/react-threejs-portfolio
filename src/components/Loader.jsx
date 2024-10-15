"use client"

import { Html, useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"

const CanvasLoader = () => {
  const { progress } = useProgress()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShowLoader(false), 500)
    }
  }, [progress])

  if (!showLoader) return null

  return (
    <Html
      as='div'
      center
      className="w-full h-full flex justify-center items-center bg-black bg-opacity-80"
    >
      <div className="text-center">
        <div className="inline-block relative w-20 h-20 mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-4 text-lg font-bold text-white">
          Loading... {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  )
}

export default CanvasLoader