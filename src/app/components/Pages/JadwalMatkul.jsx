'use client'
import React, { useEffect, useState } from "react";
import JadwalCard from "../elemets/JadwalCard";

const JadwalMatkul = () => {
  const [datetime, setDate] = useState({
    day: new Date().toString().split(" ").slice(0, 1).join(" "),
    date: new Date()
      .toISOString()
      .split(["T"])
      .at(0)
      .split("-")
      .sort((a, b) => a.localeCompare(b))
      .join("-"),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDate({
        day: new Date().toString().split(" ").slice(0, 1).join(" "),
        date: new Date()
          .toISOString()
          .split(["T"])
          .at(0)
          .split("-")
          .sort((a, b) => a.localeCompare(b))
          .join("-"),
      });
    },21600000)
    return () => clearInterval(timer)
  },[])

  let hari, waktu, matkul, ruang;
  switch (datetime.day) {
    case "Mon":
      hari = "Senin";
      matkul = ["Analisis dan Design Algoritma", "Bahasa Pemrograman Dasar"];
      waktu = ["10.40 - 12.30", "13.25 - 15.45"];
      ruang = ["4.3.3", "Labkom"];
      break;
    case "Tue":
      hari = "Selasa";
      matkul = ["Logika Matematika", "Pengantar Teknologi Informasi"];
      waktu = ["10.40 - 12.30", "13.25 - 15.45"];
      ruang = ["4.3.1", "4.3.1"];
      break;
    case "Wed":
      hari = "Rabu";
      matkul = ["Pengantar Sistem Basis Data", "Wawasan Budiluhur"];
      waktu = ["08.00 - 09.45", "09.45 - 11.25"];
      ruang = ["3.4.2", "5.3.2"];
      break;
    case "Thu":
      hari = "Kamis";
      matkul = ["Bahasa Ingris", "Bahasa Indonesia"];
      waktu = ["09.45 - 11.25", "13.25 - 14.25"];
      ruang = ["4.3.3", "4.3.3"];
      break;
    case "Fri":
      hari = "Jumat";
      break;
    case "Sat":
      hari = "Sabtu";
      break;
    case "Sun":
      hari = "Minggu";
      break;

    default:
      break;
  }

  return (
    <>
      <h1 className="mt-10 px-1 font-black text-secondary text-xl sm:text-2xl">
        JADWAL MATKUL
      </h1>
      
      <div className="bg-primary  rounded-xl mt-2 p-4 shadow-xl sm:text-start">
        {!hari || (!matkul && !waktu && !ruang) ? (
          <>
            <div className="text-white text-2xl font-bold ">
              {hari}
              <span className="text-sm ml-2">{datetime.date}</span>
            </div>
            <div className="text-white text-xl font-bold text-center my-5">
              Tidak ada kelas
            </div>
          </>
        ) : (
          <>
            <div className="text-white text-2xl font-bold">
              {hari} <span className="text-sm ml-2">{datetime.date}</span>
            </div>
            <JadwalCard
              matkul={matkul[0]}
              waktu={waktu[0]}
              ruangan={ruang[0]}
            />
            <JadwalCard
              matkul={matkul[1]}
              waktu={waktu[1]}
              ruangan={ruang[1]}
            />
          </>
        )}
      </div>
    </>
  );
};

export default JadwalMatkul;
