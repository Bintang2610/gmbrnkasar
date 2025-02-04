import { createSignal, onCleanup, createEffect } from 'solid-js';
import { A } from '@solidjs/router';
import userimg from "../assets/img/user.jpeg";


export default function Emplist() {
  const [dataKaryawan, setDataKaryawan] = createSignal([]);
  
  // Ambil data karyawan dari API
  const fetchDataKaryawan = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/get_data_karyawan');
      if (response.ok) {
        const data = await response.json();
        setDataKaryawan(data);
      } else {
        console.error('Gagal mengambil data karyawan');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  // Panggil fetchDataKaryawan saat komponen dimuat
  createEffect(() => {
    fetchDataKaryawan();
  });

  return (
    <section class="text-gray-700 p-8">
      <A href="/dashboard" class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Dashboard
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </A>

      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">Foto</th>
                <th scope="col" class="px-6 py-3">Nama</th>
                <th scope="col" class="px-6 py-3">Jabatan</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">Status Aktif</th>
                <th scope="col" class="px-6 py-3">Store Incharge</th>
                <th scope="col" class="px-6 py-3">Area Store</th>
                <th scope="col" class="px-6 py-3">NIK</th>
                <th scope="col" class="px-6 py-3">Alamat</th>
                <th scope="col" class="px-6 py-3">Jenis Kelamin</th>
                <th scope="col" class="px-6 py-3">Nomor HP</th>
              </tr>
            </thead>
            <tbody>
              {dataKaryawan().map((karyawan) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={karyawan.foto} class="h-24 w-24 object-contain" />
                  </th>
                  <td class="px-6 py-4">{karyawan.nama}</td>
                  <td class="px-6 py-4">{karyawan.jabatan}</td>
                  <td class="px-6 py-4">{karyawan.status}</td>
                  <td class="px-6 py-4">{karyawan.status_aktif}</td>
                  <td class="px-6 py-4">{karyawan.store_incharge}</td>
                  <td class="px-6 py-4">{karyawan.area_store}</td>
                  <td class="px-6 py-4">{karyawan.nik}</td>
                  <td class="px-6 py-4">{karyawan.alamat}</td>
                  <td class="px-6 py-4">{karyawan.jenis_kelamin}</td>
                  <td class="px-6 py-4">{karyawan.nomor_hp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
