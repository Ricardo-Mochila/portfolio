'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

    const MENU_LIST = [
        {
            text: '.aboutMe()',
            url: '#about'
        },
        {
            text: '.projects()',
            url: '#projects'
        },
        {
            text: '.contact()',
            url: '#contact'
        }
    ]

    return (
        <header className='flex flex-row p-[20px] w-[100%] justify-between'>
            <Image
                src="/logo.png"
                width={70}
                height={40}
                alt="Ricardo Mochila Logo"
                className='max-h-[50px]'
            />

            <nav >
                <ul className='hidden md:flex flex-row gap-[20px] text-white'>
                    {MENU_LIST.map((menu, idx) => {

                         return (
                            <Link key={menu.text} href={menu.url}>
                                {menu.text}
                            </Link>
                        )
                    }
                    )}
                     <Link key='resume(' href='./resume.pdf'>
                        .resume()
                    </Link>
                </ul>
            </nav>
        </header>
    )
}