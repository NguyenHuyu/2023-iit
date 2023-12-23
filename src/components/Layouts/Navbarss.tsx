// import { ChevronDown, ChevronLeft } from 'lucide-react'
// import Link from 'next/link'
// const Navbar = ({ lang }: { lang: string }) => {

//   return (
//     <div>
//       {lang === 'vi' &&
//         navbarVI.map((item) => (
//           <div className='group inline-block' key={item.label}>
//             <button className='outline-none focus:outline-none  px-1 py-0.5 bg-transparent rounded-lg flex items-center md:min-w-24'>
//               <Link
//                 href={`${item.href}`}
//                 className={`pr-1 font-semibold ${item.pointer} flex-1 text-[5px] md:text-[11px] lg:text-[13px] xl:text-[15px] hover:text-[#187cfa]`}
//               >
//                 {item.label}
//               </Link>
//               {item.items.length !== 0 && <ChevronDown size={14} />}
//             </button>
//             <ul
//               className={`bg-zinc-100 z-50  rounded-lg transform scale-0 ${item.ghv} absolute transition duration-150 ease-in-out origin-top `}
//             >
//               <ul className='rounded-lg px-0.5 md:px-2 text-[4px] md:text-[12px] lg:text-[15px]  cursor-pointer md:py-1'>
//                 {item.items.map((items) => (
//                   <ul key={items.label}>
//                     <li className='rounded-lg relative px-0.5 py-0.5 '>
//                       <button className='w-full text-left flex items-center outline-none focus:outline-none'>
//                         <Link
//                           href={`${items.href}`}
//                           className={`flex-1 ${items.pointer} text-[6px] md:text-[12px] lg:text-[14px] hover:text-[#187cfa]`}
//                         >
//                           {items.label}
//                         </Link>
//                         {items.items.length !== 0 && <ChevronLeft size={14} />}
//                       </button>
//                       <ul
//                         className={`${items.bg} z-50 rounded-lg absolute top-0 -right-[0.1rem] md:top-0.5 transition duration-150 ease-in-out origin-top-left md:min-w-32 w-[5rem] md:w-[11rem] `}
//                       >
//                         {items.items.map((items) => (
//                           <li
//                             key={items.href}
//                             className='px-1 md:px-2 text-[5px] md:text-[12px] lg:text-[14px] py-0.5 cursor-pointer hover:text-[#187cfa]'
//                           >
//                             <Link href={items.href}>{items.label}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   </ul>
//                 ))}
//               </ul>
//             </ul>
//           </div>
//         ))}
//       {lang === 'en' &&
//         navbarEN.map((item) => (
//           <div className='group inline-block' key={item.label}>
//             <button className='outline-none focus:outline-none  px-1 py-0.5 bg-transparent rounded-lg flex items-center md:min-w-24'>
//               <Link
//                 href={`${item.href}`}
//                 className={`pr-1 font-semibold ${item.pointer} flex-1 text-[5px] md:text-[11px] lg:text-[13px] xl:text-[15px] hover:text-[#187cfa]`}
//               >
//                 {item.label}
//               </Link>
//               {item.items.length !== 0 && <ChevronDown size={14} />}
//             </button>
//             <ul
//               className={`bg-zinc-100 z-50  rounded-lg transform scale-0 ${item.ghv} absolute transition duration-150 ease-in-out origin-top `}
//             >
//               <ul className='rounded-lg px-0.5 md:px-2 text-[4px] md:text-[12px] lg:text-[15px]  cursor-pointer md:py-1'>
//                 {item.items.map((items) => (
//                   <ul key={items.label}>
//                     <li className='rounded-lg relative px-0.5 py-0.5 '>
//                       <button className='w-full text-left flex items-center outline-none focus:outline-none'>
//                         <Link
//                           href={`${items.href}`}
//                           className={`flex-1 ${items.pointer} text-[6px] md:text-[12px] lg:text-[14px] hover:text-[#187cfa]`}
//                         >
//                           {items.label}
//                         </Link>
//                         {items.items.length !== 0 && <ChevronLeft size={14} />}
//                       </button>
//                       <ul
//                         className={`${items.bg} z-50 rounded-lg absolute top-0 -right-[0.1rem] md:top-0.5 transition duration-150 ease-in-out origin-top-left md:min-w-32 w-[5rem] md:w-[11rem] `}
//                       >
//                         {items.items.map((items) => (
//                           <li
//                             key={items.href}
//                             className='px-1 md:px-2 text-[5px] md:text-[12px] lg:text-[14px] py-0.5 cursor-pointer hover:text-[#187cfa]'
//                           >
//                             <Link href={items.href}>{items.label}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   </ul>
//                 ))}
//               </ul>
//             </ul>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Navbar
