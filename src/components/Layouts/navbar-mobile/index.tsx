import React from 'react'
import type { Locale } from '@/i18n.config'
import Link from 'next/link'

// components
import LocaleSwitcher from '@/components/Layouts/locale-switcher'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/Layouts/Logo'

// icons
import { Menu } from 'lucide-react'

interface NavbarProps {
  params: {
    lang: Locale
  }
}
interface NavItem {
  label: string
  url: string
}
interface NavbarData {
  [key: string]: NavItem[]
}

interface NavbarMobileProps extends NavbarProps {
  data: NavbarData
}

const NavbarMobileItem = ({ params, data }: NavbarMobileProps) => (
  <>
    <Logo params={params} />
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Danh mục</SheetTitle>
          <SheetDescription>
            {data[params.lang]?.map((item, index) => (
              <Link href={item.url} key={index} className='text-left'>
                <span className='px-1 py-2 block hover:bg-gray-200'>{item.label}</span>
              </Link>
            ))}
          </SheetDescription>
          <div className='flex flex-row md:gap-2 items-center '>
            <LocaleSwitcher params={params} />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </>
)

export default function Navbar_Mobile({ params }: NavbarProps) {
  const navbarData: NavbarData = {
    vi: [
      {
        label: 'Trang chủ',
        url: `/${params.lang}`
      },
      {
        label: 'Giới thiệu IIT',
        url: `/${params.lang}/gioi-thieu-iit`
      },
      {
        label: 'Sứ mệnh tầm nhìn',
        url: `/${params.lang}/su-menh-tam-nhin`
      },
      {
        label: 'Cơ cấu tổ chức',
        url: `/${params.lang}/co-cau-to-chuc`
      },
      {
        label: 'Chương trình đào tạo',
        url: `/${params.lang}/chuong-trinh-dao-tao`
      },
      {
        label: 'Khóa học',
        url: `/${params.lang}/khoa-hoc`
      },
      {
        label: 'Seminar',
        url: `/${params.lang}/seminar`
      },
      {
        label: 'Chương trình dự án',
        url: `/${params.lang}/chuong-trinh-du-an`
      },
      {
        label: 'Sản phẩm NCKH-CGCN',
        url: `/${params.lang}/san-pham-nckh-cgcn`
      },
      {
        label: 'Công bố khoa học',
        url: `/${params.lang}/cong-bo-khoa-hoc`
      },
      {
        label: 'Sách giáo trình',
        url: `/${params.lang}/sach-giao-trinh`
      },
      {
        label: 'Đối tác học thuật',
        url: `/${params.lang}/doi-tac-hoc-thuat`
      },
      {
        label: 'Đối tác doanh nghiệp',
        url: `/${params.lang}/doi-tac-doanh-nghiep`
      },
      {
        label: 'Liên hệ',
        url: `/${params.lang}/lien-he`
      }
    ],

    en: [
      {
        label: 'Home',
        url: `/${params.lang}`
      },
      {
        label: 'About IIT',
        url: `/${params.lang}/gioi-thieu-iit`
      },
      {
        label: 'Mission vision',
        url: `/${params.lang}/su-menh-tam-nhin`
      },
      {
        label: 'Organizational structure',
        url: `/${params.lang}/co-cau-to-chuc`
      },
      {
        label: 'Education',
        url: `/${params.lang}/chuong-trinh-dao-tao`
      },
      {
        label: 'Courses',
        url: `/${params.lang}/khoa-hoc`
      },
      {
        label: 'Seminar',
        url: `/${params.lang}/seminar`
      },
      {
        label: 'Project',
        url: `/${params.lang}/chuong-trinh-du-an`
      },
      {
        label: 'Research products',
        url: `/${params.lang}/san-pham-nckh-cgcn`
      },
      {
        label: 'Publications',
        url: `/${params.lang}/cong-bo-khoa-hoc`
      },
      {
        label: 'Textbook',
        url: `/${params.lang}/sach-giao-trinh`
      },
      {
        label: 'Academic partners',
        url: `/${params.lang}/doi-tac-hoc-thuat`
      },
      {
        label: 'Business partners',
        url: `/${params.lang}/doi-tac-doanh-nghiep`
      },
      {
        label: 'Contact',
        url: `/${params.lang}/lien-he`
      }
    ]
  }

  return <NavbarMobileItem params={params} data={navbarData} />
}
