'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetElement = document.querySelector(target.getAttribute('href')!)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.05]">
        <img 
          alt="" 
          className="object-cover invert" 
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent'
          }}
          src="/images/image_7.png"
        />
      </div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
            <About />
          </div>
          <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
            <Services />
          </div>
          <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}