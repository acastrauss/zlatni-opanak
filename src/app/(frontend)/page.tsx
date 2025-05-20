import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })

  return (
    <div className="home">
      <div className="content">
        <div className="links"></div>
      </div>
      <div className="footer"></div>
    </div>
  )
}
