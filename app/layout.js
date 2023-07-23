import '../styles/globals.css'
import Header from "../components/header"

export const metadata = {
  title: 'Ricardo Mochila',
  description: 'Software Engineer - Ricardo Mochila',
}

 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <Header/>

        {children}
      </body>
    </html>
  )
}
