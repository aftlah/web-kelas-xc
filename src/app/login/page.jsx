'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../components/elemets/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Input from '../components/elemets/Input'

const Login = () => {
  const [inputNim, setInputNim] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const router = useRouter()

  const hadleLogin = (e) => {
    e.preventDefault()
    const nimMahasiswa = localStorage.getItem('nim')
    const passwordMahasiswa = localStorage.getItem('password')

    if (inputNim !== nimMahasiswa && inputPassword !== passwordMahasiswa ) {
      router.push('/login')
      alert('Nim Tidak Terdaftar')
    }else{
      router.push('/')
    }
  }
  return (
    <>
      <div className="flex min-h-full mt-[8%]  flex-1 flex-col justify-center px-6 py-12 sm:mt-[20%]  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image priority src="/images/logo.png" width={150} height={150} alt="tesdt" className='mx-auto w-40 h-auto'/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login Akun Anda
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={hadleLogin}>
            <div>
              <Input namaInput={"Nim"} jenisInput={"nim"} type={"number"} onChange={(e) => setInputNim(e.target.value)}  />
              <Input namaInput={"Password"} jenisInput={"nim"} type={"password"} onChange={(e) => setInputPassword(e.target.value)}  />
            </div>
            <div>
              <Button name={"Login"} Type={"submit"}/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 ">
            Sudah Punya Akun?{' '}
            <Link href="/register" className="block font-semibold leading-6 text-secondary hover:opacity-80">
              Kalau Belum Silahan Register
            </Link>
          </p>

          <Link href="/" className='block text-center mt-12 rounded-md text-white font-semibold bg-secondary px-3 py-1.5 mx-auto text-sm w-40 '>Kembali Ke Home</Link>
        </div>
      </div>
    </>
  )
}

export default Login