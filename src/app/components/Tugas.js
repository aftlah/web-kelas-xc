import React from 'react'

function Tugas() {
  return (
    <>

      <h1 className="text-3xl font-bold mt-10">TUGAS</h1>
      <table className="table-fixed w-full text-center mt-4 bg-purple-400 ">
        <thead>
          <tr>
            <th className="border border-solid w-10">No</th>
            <th className="border border-solid ">Mata Kuliah</th>
            <th className="border border-solid ">Tugas</th>
            <th className="border border-solid ">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-solid">1</td>
            <td className="border border-solid">Andal</td>
            <td className="border border-solid">Tugas Silver</td>
            <td className="border border-solid">1 Januari</td>
          </tr>
          <tr>
            <td className="border border-solid">2</td>
            <td className="border border-solid">Bahasa Indonesia</td>
            <td className="border border-solid">Buat Makalah</td>
            <td className="border border-solid">30 November</td>
          </tr>
          <tr>
            <td className="border border-solid">3</td>
            <td className="border border-solid">Basis Data</td>
            <td className="border border-solid">Buat Tabel Relasi</td>
            <td className="border border-solid">12 Desember</td>
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default Tugas