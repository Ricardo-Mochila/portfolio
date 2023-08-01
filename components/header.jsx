'use client'

import Image from 'next/image'
import Link from 'next/link'
import { saveAs } from "file-saver";

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
            text: '.contactMe()',
            url: '#contact'
        }
    ]

    const saveFile = () => {
        saveAs(
          "./Ricardo_Mochila_CV.pdf",
          "Ricardo_Mochila_CV.pdf"
        );
    };

    const handleScroll = (e) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
    };

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
                            <Link key={menu.text} href={menu.url} onClick={handleScroll} className='font-mono hover:text-secondary-color transition-all'>
                                {menu.text}
                            </Link>
                        )
                    }
                    )}
                     <a key='resume()' onClick={saveFile} className='font-mono hover:text-secondary-color transition-all cursor-pointer'>
                        .resume()
                    </a>
                </ul>
            </nav>
        </header>
    )
}