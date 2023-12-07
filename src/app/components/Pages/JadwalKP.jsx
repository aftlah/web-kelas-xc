"use client";
import React from "react";
import CardJadwalKP from "../elemets/CardJadwalKP";

const JadwalKP = () => {
  return (
    <>
      <h1 className="mt-12 px-1 font-black text-secondary text-xl sm:text-2xl">
        KELAS PENGGANTI
      </h1>
      {datas.length > 0 ? (
        datas.map((data) => <CardJadwalKP key={data.id} {...data} />)
      ) : (
        <div className="bg-secondary rounded-xl mt-3 p-4">
          <div className="text-white text-lg font-bold text-center">
            Tidak Ada Kelas Pengganti
          </div>
        </div>
      )}
    </>
  );
};

export default JadwalKP;

const datas = [];
