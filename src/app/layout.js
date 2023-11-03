'use client'
import './globals.css'
import Header from './Header'
import Profile from '../components/Profile'
import ThemeProvider from '../provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <div className='container mx-auto'>
            <div className='flex flex-row'>
              <div className='basis-1/4'>
                <Profile />
              </div>
              <div className='basis-3/4'>
                <Header />
                {children}
              </div>
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
