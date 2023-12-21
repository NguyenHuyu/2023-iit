'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {
  text?: string
}

export default function Typewriters({ text }: Props) {
  return (
    <Typewriter
      options={{
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`${text}`).pauseFor(2000).deleteAll().typeString(`${text}`).pauseFor(2000).start()
      }}
    />
  )
}
