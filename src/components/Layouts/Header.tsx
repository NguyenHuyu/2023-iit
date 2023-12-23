import React from 'react'
import type { Locale } from '@/i18n.config'

import Navbar_Desktop from '@/components/Layouts/navbar-desktop'
import Navbar_Mobile from '@/components/Layouts/navbar-mobile'
import WrapperNavbarDestop from '@/components/Layouts/navbar-desktop/wrapper'
import WrapperNavbarMobile from '@/components/Layouts/navbar-mobile/wrapper'

interface HeaderProps {
  params: {
    lang: Locale
  }
}

export default function Header({ params }: HeaderProps) {
  return (
    <>
      {/**
       * Hidden on mobile
       * Render list of navigation items on desktop
       * wrapper: WrapperNavbarDestop
       * children: Navbar_Desktop
       * params: params
       */}
      <WrapperNavbarDestop>
        <Navbar_Desktop params={params} />
      </WrapperNavbarDestop>
      {/**
       * Hidden on desktop
       * Render list of navigation items on mobile
       * wrapper: WrapperNavbarMobile
       * children: Navbar_Mobile
       * params: params
       */}
      <WrapperNavbarMobile>
        <Navbar_Mobile params={params} />
      </WrapperNavbarMobile>
    </>
  )
}
