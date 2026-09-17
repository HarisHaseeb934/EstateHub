'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

const NavOp = ({ stylesDiff, pWrapper }) => {

    const pathname = usePathname();

    const navOp = [
        { name: 'Home', ref: '/' },
        { name: 'Properties', ref: '/properties' },
        { name: 'About Us', ref: '/about' },
        { name: 'Services', ref: '/services' },
        { name: 'Blog', ref: '/blogs' },
        { name: 'Contact', ref: '/contact' }
    ];

    return (
        <div className={`${pWrapper}`}>
            <ul className={`flex gap-6 ${stylesDiff} font-syne w-full items-center  `}>
                {navOp.map((op) => {
                    const isActive = pathname === op.ref
                    return (
                        <li key={op.name}  className="text-white" >
                            <Link href={op.ref} className='group cursor-default'>
                                <span className='relative text-md'>
                                    {op.name}
                                    <span className={`${isActive ? 'w-full' : 'w-0'}  bg-brand-text  absolute h-0.5 block -bottom-1 duration-200 group-hover:w-full transition-all`}></span>
                                </span>
                            </Link>
                        </li>
                    )   
                })
                }
            </ul>
        </div>
    )
}

export default NavOp
