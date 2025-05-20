import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'

import config from '@/payload.config'

export const HeroSection = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const heroImageDocs = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: 'zlatni-opanak-2.jpg',
      },
    },
  })
  const heroImage = heroImageDocs.totalDocs > 0 ? heroImageDocs.docs[0] : null

  const logoImageDocs = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: 'zlatni-opanak-logo.png',
      },
    },
  })
  const logoImage = logoImageDocs.totalDocs > 0 ? logoImageDocs.docs[0] : null

  return (
    <div className="relative h-screen w-screen">
      {logoImage && logoImage.url && (
        <Image
          src={logoImage.url}
          alt="Logo Image"
          width={100}
          height={100}
          className="absolute top-50 md:top-10 left-40 md:left-20 w-20 md:w-20 h-20 md:h-20 object-contain z-10"
        />
      )}
      {heroImage && heroImage.url && (
        <Image
          src={heroImage.url}
          alt="Hero Image"
          fill
          className="absolute top-0 left-0 object-cover"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>
      <h1 className="absolute top-70 left-20 md:left-1/2 text-amber-200 text-center text-4xl md:text-7xl font-bold font-[lavishly-yours]">
        Zlatni opanak
      </h1>
      <h2 className="absolute top-100 md:top-100 left-10 md:left-140 text-amber-200 text-center text-2xl md:text-4xl font-bold font-[lavishly-yours]">
        Spoj tradicije i modernosti
      </h2>
    </div>
  )
}
