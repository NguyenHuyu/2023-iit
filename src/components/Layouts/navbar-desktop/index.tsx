import type { Locale } from '@/i18n.config'
import React from 'react'
import NavbarItem, { NavbarDataProps } from './NavbarItem'
import Logo from '@/components/Layouts/Logo'
import LocaleSwitcher from '@/components/Layouts/locale-switcher'

interface NavbarProps {
  params: {
    lang: Locale
  }
}

export default function Navbar({ params }: NavbarProps) {
  const navbarVIData: NavbarDataProps[] = [
    {
      href: `/${params.lang}`,
      label: 'Trang chủ',
      ghv: '',
      items: [],
      pointer: 'cursor-pointer'
    },
    {
      href: '#',
      label: 'Giới thiệu',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',
      items: [
        {
          label: 'Giới thiệu về IIT',
          href: `/${params.lang}/gioi-thieu-iit`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        },
        {
          label: 'Sứ mệnh tầm nhìn',
          href: `/${params.lang}/su-menh-tam-nhin`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        },
        {
          label: 'Cơ cấu tổ chức',
          href: `/${params.lang}/co-cau-to-chuc`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        }
      ]
    },
    {
      href: '#',
      label: 'Đào tạo',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',
      items: [
        {
          label: 'Chương trình đào tạo',
          href: `/${params.lang}/chuong-trinh-dao-tao`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        },
        {
          label: 'Khóa học',
          href: `/${params.lang}/khoa-hoc`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        }
      ]
    },
    {
      href: '#',
      label: 'Khoa học & Công nghệ',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',

      items: [
        {
          label: 'Seminar - workshops',
          href: '/vi/khoa-hoc-cong-nghe/seminar-workshops',
          bg: 'bg-transparent',
          items: []
        },
        {
          label: 'Chương trình - Dự án',
          href: '/vi/khoa-hoc-cong-nghe/chuong-trinh-du-an',
          bg: 'bg-transparent',
          items: []
        },
        {
          label: 'Sản phẩm NCKH',
          bg: 'bg-zinc-100',
          items: [
            {
              label: 'Sản phẩm KHCN-CGCN',
              href: '/vi/khoa-hoc-cong-nghe/san-pham'
            },
            {
              label: 'Công bố khoa học',
              href: '/vi/khoa-hoc-cong-nghe/cong-bo-khoa-hoc'
            },
            {
              label: 'Sách - Giáp trình',
              href: '/vi/khoa-hoc-cong-nghe/sach-giao-trinh'
            }
          ],
          href: '#'
        }
      ]
    },
    {
      href: '#',
      label: 'Hợp tác',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',
      items: [
        {
          label: 'Đối tác học thuật',
          href: `/${params.lang}/doi-tac-hoc-thuat`,
          items: []
        },
        {
          label: 'Đối tác doanh nghiệp',
          href: `/${params.lang}/doi-tac-doanh-nghiep`,
          items: []
        }
      ]
    },
    {
      href: `/${params.lang}/lien-he`,
      label: 'Liên hệ',
      pointer: 'cursor-pointer',
      items: []
    }
  ]

  const navbarENData: NavbarDataProps[] = [
    {
      href: `/${params.lang}`,
      label: 'Home',
      ghv: '*',
      items: [],
      pointer: 'cursor-pointer'
    },
    {
      href: '#',
      label: 'About Us',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',
      items: [
        {
          label: 'About IIT',
          href: `/${params.lang}/gioi-thieu-iit`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        },
        {
          label: 'Mission vision',
          href: `/${params.lang}/su-menh-tam-nhin`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        },
        {
          label: 'Organizational structure',
          href: `/${params.lang}/co-cau-to-chuc`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        }
      ]
    },
    {
      href: '#',
      label: 'Education',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',
      items: [
        {
          label: 'Education System',
          href: `/${params.lang}/chuong-trinh-dao-tao`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        },
        {
          label: 'Courses',
          href: `/${params.lang}/khoa-hoc`,
          bg: 'bg-transparent',
          pointer: 'cursor-pointer',
          items: []
        }
      ]
    },
    {
      href: '#',
      label: 'Science & technology',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',

      items: [
        {
          label: 'Seminar - workshops',
          href: '/vi/khoa-hoc-cong-nghe/seminar-workshops',
          bg: 'bg-transparent',
          items: []
        },
        {
          label: 'Programs - Projects',
          href: '/vi/khoa-hoc-cong-nghe/chuong-trinh-du-an',
          bg: 'bg-transparent',
          items: []
        },
        {
          label: 'S&T Products',
          bg: 'bg-zinc-100',
          items: [
            {
              label: 'S&T products & technology transfer',
              href: '/vi/khoa-hoc-cong-nghe/san-pham'
            },
            {
              label: 'Scientific publications',
              href: '/vi/khoa-hoc-cong-nghe/cong-bo-khoa-hoc'
            },
            {
              label: 'Books - Armor',
              href: '/vi/khoa-hoc-cong-nghe/sach-giao-trinh'
            }
          ],
          href: '#'
        }
      ]
    },
    {
      href: '#',
      label: 'Cooperate',
      ghv: 'group-hover:scale-100',
      pointer: 'cursor-default',
      items: [
        {
          label: 'Academic Partners',
          href: `/${params.lang}/doi-tac-hoc-thuat`,
          items: []
        },
        {
          label: 'Corporate Partners',
          href: `/${params.lang}/doi-tac-doanh-nghiep`,
          items: []
        }
      ]
    },
    {
      href: `/${params.lang}/lien-he`,
      label: 'Contact',
      pointer: 'cursor-pointer',
      ghv: '',
      items: []
    }
  ]

  const navbarData = params.lang === 'vi' ? navbarVIData : navbarENData

  return (
    <>
      <Logo params={params} />
      <>
        {navbarData.map((item) => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </>

      <div className='flex flex-row md:gap-2 items-center '>
        <LocaleSwitcher />
      </div>
    </>
  )
}
