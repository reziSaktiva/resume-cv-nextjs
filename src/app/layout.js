import './globals.css'
import Header from './Header'
import Profile from './Profile'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
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
    </html>
  )
}
