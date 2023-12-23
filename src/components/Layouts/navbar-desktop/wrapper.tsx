import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function WrapperNavbarDestop({ children }: Props) {
  return (
    <header className='hidden md:block bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]  w-full fixed z-50 '>
      <div className='headerContainer mx-auto  flex justify-between items-center py-3 md:p-1 md:max-w-6xl font-semibold'>
        {children}
      </div>
    </header>
  )
}
