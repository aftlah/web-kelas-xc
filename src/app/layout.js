// import { Inter } from 'next/font/google'
import {Poppins } from 'next/font/google';
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
 const poppins = Poppins({
  weight: ['100','200','300','400', '500', '600', '700'],
  subsets: ['latin']
})


export const metadata = {
  title: 'Web XC 2023',
  description: 'Website Kelas XC 2023 Universitas Budi Luhur ',
}

export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
        <body className={poppins.className}>
          <div className='sm:hidden'>
            {children}
          </div>
          <div className="hidden sm:flex justify-center items-center sm:h-screen">
            <h1 className="text-3xl font-bold">TAMPILAN BELUM TERSEDIA</h1>
          </div>
        </body>
      </html>
    </>

  )
}
