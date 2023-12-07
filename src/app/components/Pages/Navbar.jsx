'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [data, setData] = useState('')


  useEffect(() => {
    const datas = localStorage.getItem('nim')
    setData(datas)
  }, [data])

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <nav className='h-[5rem] bg-primary bottom-0 fixed w-full sm:block sm:h-full sm:w-[8rem] sm:mt-16'>
        <div className='sm:mt-16 lg:mt-10'>
      <Image src='/images/logo-putih.png' alt='logo' width={200} height={200} className='w-[5.5rem] h-auto mt-4 mx-auto hidden sm:block  sm:mb-6' />
        <ul className='flex justify-between items-center  py-4 px-10  text-white font-semibold sm:flex-col sm:gap-y-7 sm:w-full sm:px-2 '>
          <li className={`mt-1 w-10 sm:border-b-[1.5px] border-white sm:w-full hidden sm:block  `}>
          {
              data && data.length > 0 ? (
                <button className="flex bg-primary rounded-sm px-5 py-2 flex-col font-medium justify-center items-center sm:px-0 sm:mx-auto " onClick={() => logout()}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-8 h-9 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  <p>Logout</p>
                </button>
              ) : (
                <button className="flex bg-primary rounded-sm px-5 py-2 flex-col font-medium justify-center items-center sm:px-0 sm:mx-auto" onClick={() => router.push('/login')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  <p>Login</p>
                </button>
              )
            }
          </li>
          <li className={`mt-1 w-10 sm:border-b-[1.5px] border-white sm:w-full ${pathname == '/tugas' ? 'scale-110' : 'opacity-75'} `}>
            <Link href="/tugas" className="flex flex-col py-1  justify-center items-center " >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <p>Tugas</p>
            </Link>
          </li>
          <li className={`mt-1 w-10 sm:border-b-[1.5px] border-white sm:w-full ${pathname == '/' ? 'scale-110' : 'opacity-75'} `}>
            <Link href="/" className="flex flex-col py-1 justify-center items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <p>Home</p>
            </Link>
          </li>
          <li className={`mt-1 w-10 sm:border-b-[1.5px] border-white sm:w-full ${pathname == '/anggota' ? 'scale-110' : 'opacity-75'} `}>
            <Link href="/anggota" className="flex flex-col py-1 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <p>Anggota</p>
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar