import { useState, useEffect, useRef } from 'react'

export const useWindowWidthBP = () => {
  const isClient = typeof window === 'object'
  const lastWidth = useRef()

  const getWidthBP = () => {
    if (!isClient) return undefined
    if (window.innerWidth >= 1920) return 1920
    if (window.innerWidth >= 1280) return 1280
    if (window.innerWidth >= 960) return 960
    if (window.innerWidth >= 600) return 600
    if (window.innerWidth >= 0) return 0
  }

  const [windowWidth, setWindowWidth] = useState(getWidthBP)

  useEffect(() => {
    if (!isClient) return false

    const handleResize = () => {
      if (window?.innerWidth !== lastWidth.current) {
        const width = getWidthBP()
        lastWidth.current = width
        setWindowWidth(width)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return windowWidth
}
