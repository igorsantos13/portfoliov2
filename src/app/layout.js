import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Igor Santos',
  description: 'Helping people achieve their goals through code </>',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={mont.className}>{children}</body>

    </html>
  )
}
