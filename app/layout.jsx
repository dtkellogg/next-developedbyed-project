import './globals.css'
import { Montserrat } from '@next/font/google'  // you can import any font from google very easily

const montserrat =  Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-montserrat'  // to use this with tailwind && add it in tailwind.config.js
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <nav>
          <ul className="font-montserrat">
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

// the ul class font-montserrat isn't working... not sure why
