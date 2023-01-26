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
      <head />
      <body className={`${montserrat.className} mx-32 my-12`}>
        {/* <nav>
          <ul className="font-montserrat">
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  )
}

// the ul class font-montserrat isn't working... not sure why
