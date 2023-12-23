import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function WrapperNavbarMobile({ children }: Props) {
  return (
    <header className='flex justify-between px-6 py-2 items-center md:hidden bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]'>
      {children}
    </header>
  )
}
