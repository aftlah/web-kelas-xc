'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../components/elemets/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [inputNim, setInputNim] = useState('')
  const router = useRouter()

  const hadleLogin = (e) => {
    e.preventDefault()
    const nimMahasiswa = localStorage.getItem('nim')

    if (inputNim !== nimMahasiswa) {
      router.push('/login')
      alert('Nim Tidak Terdaftar')
    }else{
      router.push('/')
    }
  }
  return (
    <>
      <div className="flex min-h-full mt-[10%]  flex-1 flex-col justify-center px-6 py-12 md:mt-0 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image priority src="/images/logo.png" width={150} height={150} alt="tesdt" className='mx-auto w-40 h-auto'/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login Akun Anda
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={hadleLogin}>
            <div>
              <label htmlFor="nim" className="block text-sm font-medium leading-6 text-gray-900">
                Masukan NIM
              </label>
              <div className="mt-2">
                <input
                onChange={(e) => setInputNim(e.target.value)}
                  id="nim"
                  name="nim"
                  type="text"
                  autoComplete="nim"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <Button name={"Login"} Type={"submit"}/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah Register?{' '}
            <Link href="/register" className="font-semibold leading-6 text-secondary hover:text-indigo-500">
              Kalau Belum Silahan Register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login