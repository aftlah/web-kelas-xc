"use client";
import React, { useState } from "react";
import Link from "next/link";
import Input from "../components/elemets/Input";
import Button from "../components/elemets/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Register = () => {
  const router = useRouter();
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nim.length <= 10 && nim.length >= 10) {
      localStorage.setItem("nama", nama);
      localStorage.setItem("nim", nim);
      localStorage.setItem("password", password);
      Swal.fire({
        title: "Register Succes",
        text: "Silahkan Login",
        icon: "success",
        confirmButtonColor: "#004A5C",
        confirmButtonText: "Oke",
      });
      router.push("/login");
    } else {
      alert("Nim Harus 10 Angka");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-[8%] sm:mt-[20%] px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            priority
            src="/images/logo.png"
            width={150}
            height={150}
            alt="tesdt"
            className="mx-auto w-40 h-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Akun Anda
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="" onSubmit={handleSubmit}>
            <Input
              namaInput={"Nama"}
              jenisInput={"nama"}
              type={"text"}
              onChange={(e) => setNama(e.target.value)}
            />
            <Input
              namaInput={"Nim"}
              jenisInput={"nim"}
              type={"text"}
              onChange={(e) => setNim(e.target.value)}
            />
            <Input
              namaInput={"Password"}
              jenisInput={"password"}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-8">
              <Button name={"Register"} Type={"submit"} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah Punya Akun?{" "}
            <Link
              href="/login"
              className="block font-semibold leading-6 text-secondary hover:opacity-90"
            >
              Kalau Sudah Silahkan Login
            </Link>
          </p>
          <Link
            href="/"
            className="block text-center mt-9 rounded-md text-white font-semibold bg-secondary px-3 py-1.5 mx-auto text-sm w-40 "
          >
            Kembali Ke Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
