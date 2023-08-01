'use client'

import '../styles/globals.css'
import Header from "../components/header"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SplashScreen from '../components/splashScreen'
import { Inconsolata } from 'next/font/google'

export const mono = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
    variable: '--mono'
});
 
export default function RootLayout({ children }) {

	const pathName = usePathname();
	const isHome = pathName === '/'
	const [isLoading, setIsLoading] = useState(isHome)

	useEffect( () => {
		if(isLoading) return
	}, [isLoading])

	return (
		<html lang="en" className={`${mono.variable} scroll-smooth`}>
		<head>
			<link rel='icon' href='/favicon.ico'/>
		</head>
		<body className='flex flex-col h-[100vh]'>
			{
				isLoading && isHome ? (<SplashScreen loaded={() => setIsLoading(false)}/>) : (
					<>
						<Header/>
						{children}
					</>
				)}
			
		</body>
		</html>
	)
}
