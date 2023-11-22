// 'use client'
import Navbar from "./components/Navbar"
import Siswa from "./components/Siswa"
import Tugas from "./components/Tugas"

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      <Tugas/>
      <Siswa/>
    </div>
  )
}