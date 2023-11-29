"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Pages/Navbar";

const Anggota = () => {
  const [search, setSearch] = useState("");

  const filteredData = [
    {
      id: 1,
      name: "Aldi",
      quotes: "Lorem Ipsum dolar sit amet",
    },
    {
      id: 2,
      name: "ALa",
      quotes: "Lorem Ipsum dolar sit amet",
    },
    {
      id: 3,
      name: "loal",
      quotes: "Lorem Ipsum dolar sit amet",
    },
    {
      id: 4,
      name: "raed",
      quotes: "Lorem Ipsum dolar sit amet",
    },
    {
      id: 5,
      name: "ref",
      quotes: "Lorem Ipsum dolar sit amet",
    },
  ];

  const filterAnggota = filteredData.filter((anggota) =>
    anggota.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="sm:w-[80%] sm:ml-36">
        <div className="flex justify-center mt-10 mb-5 gap-2 items-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <div className="text-2xl font-extrabold text-secondary sm:text-3xl">ANGGOTA</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </div>
        <div className="flex justify-between  mt-3 p-1 h-11 w-[80%] mx-auto border-secondary border-[3px] rounded-lg">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Cari Anggota..."
            className="w-[80%] border-none pl-1 border-secondary text-sm font-semibold focus-within:outline-none"
          />
        </div>

        {filterAnggota.filter((anggota) => anggota.name !== null).length ===
          0 && (
          <p className="text-center mt-[35%]  mx-auto w-[50%] text-secondary text-xl font-bold">
            Nama Anggota Tidak Terdaftar
          </p>
        )}
        <div className="grid w-full grid-cols-2 gap-2 mt-6 mb-24 px-2">
          {filterAnggota.map((data) => (
            <div
              key={data.id}
              className="w-[99%] mx-auto border mt-3 p-3 shadow-xl rounded-lg  bg-primary"
            >
              <Image
                src="/images/5.png"
                alt=""
                width={330}
                height={230}
                className="rounded-md bg-white mx-auto"
              />
              <h1 className="font-bold text-md text-white my-3 ml-1">
                {data.name}
              </h1>
              <q className="block text-white font-medium text-sm -mt-2 ml-1">
                {data.quotes}
              </q>
              <div className=" flex justify-end w-full mt-4">
                <Link href="#" className=" text-white w-fit mr-1 ">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.847 7.847 0 0 0-2.833 1.849A7.757 7.757 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.847 7.847 0 0 0 1.849 2.833a7.757 7.757 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.847 7.847 0 0 0 2.833-1.849a7.716 7.716 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.847 7.847 0 0 0-1.849-2.833A7.716 7.716 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0m0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a4.989 4.989 0 0 1 1.844 1.197a4.931 4.931 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.048 5.048 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333S18.948 21.333 16 21.333M26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:hidden">
          <Navbar />
        </div>
      </div>
      <div className="hidden sm:block">
        <Navbar />
      </div>
    </>
  );
};

export default Anggota;
