import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/ui/Navbar/Navbar'
import Sidebar from '@/ui/Sidebar/Sidebar'
import Footer from '@/ui/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard Project',
  description: 'A simple Dashboard Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex'>
            <div>
              <Sidebar />
            </div>
            {children}
          </div>
          <div className='sticky top-full'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
