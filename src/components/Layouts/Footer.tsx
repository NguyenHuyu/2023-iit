import React from 'react'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)

  return (
    <div className='flex items-end w-full mt-10 pt-4 md:h-60  bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd] md:mt-28'>
      <footer className='w-full body-font mx-auto max-w-6xl'>
        <div className='container flex flex-col justify-between flex-wrap px-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap'>
          <div className='flex-shrink-0 w-72 mx-auto text-center md:mx-0 md:text-left'>
            <p className='text-sm font-medium uppercase text-black'>{footer.title}</p>
            <p className='mt-2 text-[10px] md:text-sm text-black'>{footer.address}</p>
            <div className='mt-4'>
              <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start space-x-6'>
                <Link href='https://www.youtube.com/channel/UCbN4qbS_htx24I4I97W1mUQ'>
                  <div>
                    <FaYoutube className='md:text-[15px] text-[10px]  text-color-icons hover:scale-125 hover:text-color-icons-hover duration-300' />
                  </div>
                </Link>
                <Link href='https://www.facebook.com/iit.siu.edu.vn'>
                  <div>
                    <FaFacebook className='md:text-[15px] text-[10px]  text-color-icons hover:scale-125 hover:text-color-icons-hover duration-300' />
                  </div>
                </Link>
                <div>
                  <Link href='https://www.siu.edu.vn'>
                    <FaInstagram className='md:text-[15px] text-[10px]  text-color-icons hover:scale-125 hover:text-color-icons-hover duration-300' />
                  </Link>
                </div>
                <Link href='https://www.linkedin.com/in/iit-siu-75a99b273/.'>
                  <div>
                    <FaLinkedinIn className='md:text-[15px] text-[10px]  text-color-icons hover:scale-125 hover:text-color-icons-hover duration-300' />
                  </div>
                </Link>
              </span>
            </div>
          </div>
          <div className='flex flex-wrap  mt-2 -mb-10 text-center md:pl-20 md:mt-0 md:text-right'>
            <div className='w-full px-4 '>
              <h2 className='text-sm font-medium uppercase text-black '>{footer.note}</h2>
              <nav className='text-left flex justify-around md:flex md:flex-col pb-10 md:pb-0'>
                <li className='mt-3 flex items-center gap-2'>
                  <MdEmail className='md:text-[17px] text-[10px]  text-[#f4b341]  hover:scale-125 hover:text-[#e5a432] duration-300' />
                  <span className='text-black cursor-pointer md:text-[15px] text-[10px]'>{footer.mail}</span>
                </li>
                <li className='mt-3 flex items-center gap-2'>
                  <AiFillPhone className='md:text-[15px] hover:scale-125 hover:text-[#e5a432] duration-300 text-[10px]  text-[#f4b341] ' />
                  <span className='text-black cursor-pointer md:text-[15px] text-[10px] '>{footer.phone}</span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className='container px-5 py-2 mx-auto'>
            <p className='text-[7px] md:text-sm text-black capitalize text-center'>{footer.fact}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
