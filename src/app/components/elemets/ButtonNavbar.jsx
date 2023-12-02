'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const ButtonNavbar = () => {
    const router = useRouter()
    const [data,setData] = useState('')

    useEffect(() => {
        const datas = localStorage.getItem('nim')
        setData(datas)
       
    },[data])

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            {
                data && data.length > 0 ? (
                    <button className='flex flex-col justify-center items-center' onClick={() => logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        <p>Logout</p>
                    </button>
                ) : (
                    <button className='flex flex-col justify-center items-center' onClick={() => router.push('/login')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        <p>Login</p>
                    </button>
                )
            }
        </>
    )
}

export default ButtonNavbar