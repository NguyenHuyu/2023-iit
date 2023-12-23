import Link from 'next/link'
import { ChevronDown, ChevronLeft } from 'lucide-react'

interface Items {
  label: string
  href: string
  bg?: string
  pointer?: string
  items: Items[]
}

export interface NavbarDataProps {
  label: string
  href?: string
  ghv?: string
  pointer?: string
  items: Items[]
}

const NavbarItem = ({ label, href, pointer, ghv, items }: NavbarDataProps) => (
  <div className='group inline-block' key={label}>
    <button className='outline-none focus:outline-none px-1 py-0.5 bg-transparent rounded-lg flex items-center md:min-w-24'>
      <Link
        href={`${href}`}
        className={`pr-1 font-semibold ${pointer} flex-1 text-[5px] md:text-[11px] lg:text-[13px] xl:text-[15px] hover:text-[#187cfa]`}
      >
        {label}
      </Link>
      {items.length !== 0 && <ChevronDown size={14} />}
    </button>
    <ul
      className={`bg-zinc-100 z-50  rounded-lg transform scale-0 ${ghv} absolute transition duration-150 ease-in-out origin-top `}
    >
      <ul className='rounded-lg px-0.5 md:px-2 text-[4px] md:text-[12px] lg:text-[15px]  cursor-pointer md:py-1'>
        {items.map((subItem) => (
          <ul key={subItem.label}>
            <li className='rounded-lg relative px-0.5 py-0.5 '>
              <button className='w-full text-left flex items-center outline-none focus:outline-none'>
                <Link
                  href={subItem.href}
                  className={`flex-1 ${subItem.pointer} text-[6px] md:text-[12px] lg:text-[14px] hover:text-[#187cfa]`}
                >
                  {subItem.label}
                </Link>
                {subItem.items.length !== 0 && <ChevronLeft size={14} />}
              </button>
              <ul
                className={`${subItem.bg} z-50 rounded-lg absolute top-0 -right-[0.1rem] md:top-0.5 transition duration-150 ease-in-out origin-top-left md:min-w-32 w-[5rem] md:w-[11rem] `}
              >
                {subItem.items.map((subSubItem) => (
                  <li
                    key={subSubItem.href}
                    className='px-1 md:px-2 text-[5px] md:text-[12px] lg:text-[14px] py-0.5 cursor-pointer hover:text-[#187cfa]'
                  >
                    <Link href={subSubItem.href}>{subSubItem.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </ul>
    </ul>
  </div>
)

export default NavbarItem
