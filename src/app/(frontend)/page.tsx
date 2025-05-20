import React from 'react'
import './styles.css'
import { HeroSection } from '@/components/HeroSection'
import { AboutUsSection } from '@/components/AbousUsSection'

export default async function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUsSection />
    </div>
  )
}
