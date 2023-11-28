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
      {/* <div className="md:hidden"> */}
      <div className="w-[100%]  mx-auto gap-x-6 relative sm:flex sm:flex-col overflow-hidden">
        <div className=" sm:w-[100%]">
          <div className="w-[90%] mx-auto sm:w-[100%] sm:ml-[9.2rem] ">
            <div className="sm:w-[70%]">
              <TopBar />
              <JadwalMatkul />
              <JadwalKP />
            </div>
            <div className="sm:overflow-x-auto">
            <Seminar />
            </div>
            <div className="sm:w-[70%]">
              <Pesan />
            </div>
          </div>
          <div className="w-[100%] sm:w-[100%] ml-auto">
            <Footer />
          </div>
        </div>
        <div className="sm:w-[100%]">
          <Navbar />
        </div>
      </div>
      {/* </div> */}

    </>
  )
}