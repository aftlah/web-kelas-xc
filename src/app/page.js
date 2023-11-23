import JadwalKP from "./components/Pages/JadwalKP"
import JadwalMatkul from "./components/Pages/JadwalMatkul"
import Seminar from "./components/Pages/Seminar"
import TopBar from "./components/Pages/TopBar"
import Navbar from "./components/Pages/Navbar"
import Pesan from "./components/Pages/Pesan"
export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto relative">
        <TopBar />
        <JadwalMatkul />
        <JadwalKP />
        <Seminar />
        <Pesan/>
      </div>
      <Navbar />
    </>


  )
}