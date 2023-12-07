import React from 'react'
import CardTugas from '../components/elemets/CardTugas'
import Navbar from '../components/Pages/Navbar'

const Tugas = () => {
  return (
    <>
      <div className=" sm:ml-36 lg:ml-10 ">
        <div className='mt-10 mb-10 gap-x-3 flex items-center justify-center text-secondary '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <h1 className='text-3xl font-extrabold'>TUGAS</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
        <div className='mb-24 sm:grid sm:grid-cols-2 sm:gap-x-1 lg:ml-7 lg:grid-cols-1'>
          <CardTugas matkul={"Analisis design dan algoritma"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Pengantar Teknologi Informasi"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Sistem Basis Data"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Logika Matematika"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Bahasa Dasar Pemrograman"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Wawasan Budi Luhur"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Bahasa Indonesia"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
          <CardTugas matkul={"Bahasa Ingris"} judulTugas={"Tugas Silver"} deadline={"20-12-2022"} />
        </div>
      </div>

      {/* <div className="hidden lg:flex justify-center items-center sm:h-screen">
        <h1 className="text-3xl font-bold">TAMPILAN BELUM TERSEDIA</h1>
      </div> */}
      <Navbar />
    </>
  )
}

export default Tugas