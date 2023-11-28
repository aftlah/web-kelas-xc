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
      <div className='w-full  py-6 px-5 mt-10 mb-10 text-white bg-secondary h-[24rem] sm:mb-0 sm:h-[21rem] sm:pl-[9.5rem] sm:pr-0'>
        <div className='sm:mt-4'>
          <div>
            <Image src='/images/logo-putih.png' alt='logo' width={200} height={200} className='w-24 h-auto ' />
            <div className='text-[0.8rem] font-medium mt-4 mb-2 sm:text-md'>
              <div>Copyright © Kelas XC 2023</div>
              <div>Made With ❤️</div>
            </div>
          </div>
          <div className='py-2 sm:hidden'>
            {
              data && data.length > 0 ? (
                <button className="flex bg-primary rounded-sm px-5 py-2 flex-col font-medium justify-center items-center" onClick={() => logout()}>
                  <p>Logout</p>
                </button>
              ) : (
                <button className="flex bg-primary rounded-sm px-5 py-2 flex-col font-medium justify-center items-center" onClick={() => router.push('/login')}>
                  <p>Login</p>
                </button>
              )
            }
          </div>
        </div>
        <div className='mt-4 flex gap-x-14 justify-between sm:justify-start sm:gap-x-32 sm:mt-10'>
          <div>
            <h1 className='text-xl font-bold'>Kontributor</h1>
            <div className='flex flex-col text-xs gap-y-2 mt-1'>
              <Link href='https://www.instagram.com/aftlah/' target='_blank'>@afltah</Link>
              <Link href='https://www.instagram.com/nerdy.dandy/' target='_blank'>@nerdy.dandy</Link>
              <Link href='https://www.instagram.com/fardias1/' target='_blank'>@fardias1</Link>
            </div>
          </div>
          <div className='sm:w-52'>
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
