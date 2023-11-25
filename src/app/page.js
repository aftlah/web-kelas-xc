import JadwalKP from "./components/Pages/JadwalKP"
import JadwalMatkul from "./components/Pages/JadwalMatkul"
import Seminar from "./components/Pages/Seminar"
import TopBar from "./components/Pages/TopBar"
import Pesan from "./components/Pages/Pesan"
import Footer from "./components/Pages/Footer"
import Navbar from "./components/Pages/Navbar"
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

    </>
  )
}