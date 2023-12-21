// 'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import Navbar from './Navbar'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
// import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
// import { usePathname, useRouter } from 'next/navigation'
// import { cn } from '@/lib/utils'
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger
// } from '@/components/ui/sheet'
// import { Locales } from '@/types/locales'

// export default function Header({ lang, languages }: { lang: string; languages: Locales }) {
//   const [open, setOpen] = useState(false)
//   const [value, setValue] = useState('')

//   const router = useRouter()
//   const path = usePathname()

//   const frameworks = [
//     {
//       value: 'vi',
//       label: 'Tiếng việt'
//     },
//     {
//       value: 'en',
//       label: 'English'
//     }
//   ]

//   return (
//     <section>
//       <main className='hidden md:block bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]  w-full fixed z-50 '>
//         <div className='headerContainer mx-auto  flex justify-between items-center py-3 md:p-1 md:max-w-6xl font-semibold'>
//           <div className='flex items-center md:gap-2'>
//             <Link href={`/${lang}`}>
//               <div className='flex items-center gap-1 md:gap-2'>
//                 <Image
//                   src='/assets/logosiu.png'
//                   width={1000000}
//                   height={1000000}
//                   className='w-10 md:w-[80px] lg:w-[100px]'
//                   alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
//                 />
//                 <Image
//                   src='/assets/logoiit.png'
//                   width={1000000}
//                   height={1000000}
//                   className='w-14 md:w-[80px] lg:w-[180px]'
//                   alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
//                 />
//               </div>
//             </Link>
//           </div>
//           <Navbar lang={lang} />
//           <div className='flex flex-row md:gap-2 items-center '>
//             <Popover open={open} onOpenChange={setOpen}>
//               <PopoverTrigger asChild>
//                 <Button
//                   size='sm'
//                   variant='secondary'
//                   role='combobox'
//                   aria-expanded={open}
//                   className='md:w-[120px] lg:w-[130px] justify-between'
//                 >
//                   {lang === 'vi' ? 'Tiếng việt' : 'English'}
//                   <CaretSortIcon className='md:ml-1 h-3 w-3 shrink-0 opacity-90' />
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className='w-[140px] p-0 bg-slate-200'>
//                 <Command>
//                   <CommandGroup>
//                     {frameworks.map((framework) => (
//                       <CommandItem
//                         key={framework.value}
//                         onSelect={(currentValue) => {
//                           setValue(currentValue === value ? '' : currentValue)
//                           path.split('/').length > 2
//                             ? router.push(`/${framework.value}/${path.split('/')[2]}`)
//                             : router.push(`/${framework.value}`)
//                           setOpen(false)
//                         }}
//                       >
//                         {framework.label}
//                         <CheckIcon
//                           className={cn('ml-auto h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')}
//                         />
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                 </Command>
//               </PopoverContent>
//             </Popover>
//           </div>
//         </div>
//       </main>
//       <div className='flex justify-between px-6 py-2 items-center md:hidden bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]'>
//         <div className='flex items-center md:gap-2'>
//           <Link href={`/${lang}`}>
//             <div className='flex items-center gap-1 md:gap-2'>
//               <Image
//                 src='/assets/logosiu.png'
//                 width={10000}
//                 height={10000}
//                 className='w-16'
//                 alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
//               />
//               <Image
//                 src='/assets/logoiit.png'
//                 width={10000}
//                 height={10000}
//                 className='w-28'
//                 alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
//               />
//             </div>
//           </Link>
//         </div>
//         <Sheet>
//           <SheetTrigger>
//             <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
//               <path
//                 fillRule='evenodd'
//                 d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
//                 clipRule='evenodd'
//               ></path>
//             </svg>
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle>Danh mục</SheetTitle>
//               <SheetDescription>
//                 {lang === 'vi'
//                   ? listVI.map((item, index) => (
//                       <Link href={item.url} key={index} className='text-left'>
//                         <span className='px-1 py-2 block hover:bg-gray-200'>{item.label}</span>
//                       </Link>
//                     ))
//                   : listEN.map((item, index) => (
//                       <Link href={item.url} key={index} className='text-left'>
//                         <span className='px-1 py-2 block hover:bg-gray-200'>{item.label}</span>
//                       </Link>
//                     ))}
//               </SheetDescription>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     size='sm'
//                     variant='secondary'
//                     role='combobox'
//                     aria-expanded={open}
//                     className='md:w-[120px] lg:w-[130px] justify-between'
//                   >
//                     {lang === 'vi' ? 'Tiếng việt' : 'English'}
//                     <CaretSortIcon className='md:ml-1 h-3 w-3 shrink-0 opacity-90' />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className='w-[140px] p-0 bg-slate-200'>
//                   <Command>
//                     <CommandGroup>
//                       {frameworks.map((framework) => (
//                         <CommandItem
//                           key={framework.value}
//                           onSelect={(currentValue) => {
//                             setValue(currentValue === value ? '' : currentValue)
//                             path.split('/').length > 2
//                               ? router.push(`/${framework.value}/${path.split('/')[2]}`)
//                               : router.push(`/${framework.value}`)
//                             setOpen(false)
//                           }}
//                         >
//                           {framework.label}
//                           <CheckIcon
//                             className={cn('ml-auto h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')}
//                           />
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </section>
//   )
// }

import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import SIU from '../../../public/assets/logosiu.png'
import IIT from '../../../public/assets/logoiit.png'
import Navbar from './Navbar'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  const listVI = [
    {
      label: 'Trang chủ',
      url: `/${lang}`
    },
    {
      label: 'Giới thiệu IIT',
      url: `/${lang}/gioi-thieu-iit`
    },
    {
      label: 'Sứ mệnh tầm nhìn',
      url: `/${lang}/su-menh-tam-nhin`
    },
    {
      label: 'Cơ cấu tổ chức',
      url: `/${lang}/co-cau-to-chuc`
    },
    {
      label: 'Chương trình đào tạo',
      url: `/${lang}/chuong-trinh-dao-tao`
    },
    {
      label: 'Khóa học',
      url: `/${lang}/khoa-hoc`
    },
    {
      label: 'Seminar',
      url: `/${lang}/seminar`
    },
    {
      label: 'Chương trình dự án',
      url: `/${lang}/chuong-trinh-du-an`
    },
    {
      label: 'Sản phẩm NCKH-CGCN',
      url: `/${lang}/san-pham-nckh-cgcn`
    },
    {
      label: 'Công bố khoa học',
      url: `/${lang}/cong-bo-khoa-hoc`
    },
    {
      label: 'Sách giáo trình',
      url: `/${lang}/sach-giao-trinh`
    },
    {
      label: 'Đối tác học thuật',
      url: `/${lang}/doi-tac-hoc-thuat`
    },
    {
      label: 'Đối tác doanh nghiệp',
      url: `/${lang}/doi-tac-doanh-nghiep`
    },
    {
      label: 'Liên hệ',
      url: `/${lang}/lien-he`
    }
  ]

  const listEN = [
    {
      label: 'Home',
      url: `/${lang}`
    },
    {
      label: 'About IIT',
      url: `/${lang}/gioi-thieu-iit`
    },
    {
      label: 'Mission vision',
      url: `/${lang}/su-menh-tam-nhin`
    },
    {
      label: 'Organizational structure',
      url: `/${lang}/co-cau-to-chuc`
    },
    {
      label: 'Education',
      url: `/${lang}/chuong-trinh-dao-tao`
    },
    {
      label: 'Courses',
      url: `/${lang}/khoa-hoc`
    },
    {
      label: 'Seminar',
      url: `/${lang}/seminar`
    },
    {
      label: 'Project',
      url: `/${lang}/chuong-trinh-du-an`
    },
    {
      label: 'Research products',
      url: `/${lang}/san-pham-nckh-cgcn`
    },
    {
      label: 'Publications',
      url: `/${lang}/cong-bo-khoa-hoc`
    },
    {
      label: 'Textbook',
      url: `/${lang}/sach-giao-trinh`
    },
    {
      label: 'Academic partners',
      url: `/${lang}/doi-tac-hoc-thuat`
    },
    {
      label: 'Business partners',
      url: `/${lang}/doi-tac-doanh-nghiep`
    },
    {
      label: 'Contact',
      url: `/${lang}/lien-he`
    }
  ]

  return (
    <header>
      <main className='hidden md:block bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]  w-full fixed z-50 '>
        <div className='headerContainer mx-auto  flex justify-between items-center py-3 md:p-1 md:max-w-6xl font-semibold'>
          <div className='flex items-center md:gap-2'>
            <Link href={`/${lang}`}>
              <div className='flex items-center gap-1 md:gap-2'>
                <Image
                  src={SIU}
                  width={10000}
                  height={10000}
                  className='w-10 md:w-[80px] lg:w-[100px]'
                  alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                />
                <Image
                  src={IIT}
                  width={10000}
                  height={10000}
                  className='w-14 md:w-[80px] lg:w-[180px]'
                  alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                />
              </div>
            </Link>
          </div>
          <Navbar lang={lang} />
          <div className='flex flex-row md:gap-2 items-center '>
            <LocaleSwitcher />
          </div>
        </div>
      </main>
      <div className='flex justify-between px-6 py-2 items-center md:hidden bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]'>
        <div className='flex items-center md:gap-2'>
          <Link href={`/${lang}`}>
            <div className='flex items-center gap-1 md:gap-2'>
              <Image
                src={SIU}
                width={10000}
                height={10000}
                className='w-16'
                alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
              />
              <Image
                src={IIT}
                width={10000}
                height={10000}
                className='w-28'
                alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
              />
            </div>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Danh mục</SheetTitle>
              <SheetDescription>
                {lang === 'vi'
                  ? listVI.map((item, index) => (
                      <Link href={item.url} key={index} className='text-left'>
                        <span className='px-1 py-2 block hover:bg-gray-200'>{item.label}</span>
                      </Link>
                    ))
                  : listEN.map((item, index) => (
                      <Link href={item.url} key={index} className='text-left'>
                        <span className='px-1 py-2 block hover:bg-gray-200'>{item.label}</span>
                      </Link>
                    ))}
              </SheetDescription>
              <div className='flex flex-row md:gap-2 items-center '>
                <LocaleSwitcher />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
