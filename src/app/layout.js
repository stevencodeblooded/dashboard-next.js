import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/ui/Navbar/Navbar'
import Sidebar from '@/ui/Sidebar/Sidebar'
import Footer from '@/ui/Footer/Footer'
import Status from '@/ui/Status/Status'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard Project',
  description: 'A simple Dashboard Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='flex flex-col min-h-screen w-1/6'>
            <div>
              <Sidebar />
            </div>
            <div className='sticky top-full'>
              <Status />
            </div>
          </div>

          <div className='w-5/6'>
            <div className='flex flex-col min-h-screen flex-1'>
              <Navbar />
              {children}
              <div className='sticky top-full'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
