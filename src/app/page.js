import JadwalKP from "./components/Pages/JadwalKP"
import JadwalMatkul from "./components/Pages/JadwalMatkul"
import Seminar from "./components/Pages/Seminar"
import TopBar from "./components/Pages/TopBar"
import Navbar from "./components/Pages/Navbar"
import Pesan from "./components/Pages/Pesan"
import Footer from "./components/Pages/Footer"
export default function Home() {
  return (
    <>
      <div className="sm:hidden">
        <div className="w-[90%] mx-auto relative ">
          <TopBar />
          <JadwalMatkul />
          <JadwalKP />
          <Seminar />
          <Pesan />
        </div>
        <Footer />
        <Navbar />
      </div>
      <div className="hidden sm:flex justify-center items-center sm:h-screen">
       <h1 className="text-3xl font-bold">TAMPILAN BELUM TERSEDIA</h1>
      </div>
    </>
  )
}