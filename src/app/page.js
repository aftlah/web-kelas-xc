import JadwalKP from "./components/JadwalKP"
import JadwalMatkul from "./components/JadwalMatkul"
import Seminar from "./components/Seminar"
import TopBar from "./components/TopBar"

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <TopBar />
      <JadwalMatkul />
      <JadwalKP />
      <Seminar/>


    </div>
  )
}