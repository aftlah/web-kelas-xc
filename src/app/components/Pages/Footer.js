'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export const Footer = () => {
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
      <div className='w-full  py-6 px-5 mt-10 mb-10 text-white bg-secondary h-[24rem]'>
        <div className=''>
          <div>
            <Image src='/images/logo-putih.png' alt='logo' width={200} height={200} className='w-24 h-auto ' />
            <div className='text-[0.8rem] font-medium mt-4 mb-2'>
              <div>Copyright © Kelas XC 2023</div>
              <div>Made With ❤️</div>
            </div>
          </div>
          <div className='py-2'>
            {
              data && data.length > 0 ? (
                <button className="flex bg-primary rounded-sm px-5 py-2 flex-col font-medium justify-center items-center" onClick={() => logout()}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg> */}
                  <p>Logout</p>
                </button>
              ) : (
                <button className="flex bg-primary rounded-sm px-5 py-2 flex-col font-medium justify-center items-center" onClick={() => router.push('/login')}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg> */}
                  <p>Login</p>
                </button>
              )
            }
          </div>
        </div>
        <div className='mt-4 flex gap-x-14 justify-between'>
          <div>
            <h1 className='text-xl font-bold'>Kontributor</h1>
            <div className='flex flex-col text-xs gap-y-2 mt-1'>
              <Link href='https://www.instagram.com/aftlah/' target='_blank'>@afltah</Link>
              <Link href='https://www.instagram.com/nerdy.dandy/' target='_blank'>@nerdy.dandy</Link>
              <Link href='https://www.instagram.com/fardias1/' target='_blank'>@fardias1</Link>
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold'>Location</h1>
            <p className='text-xs'>Universitas Budi Luhur, Jl Ciledug
              raya No.1C, Petukangan utara, Kota
              Jakarta Selatan.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
