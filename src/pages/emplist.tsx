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
        <div class="flex items-center justify-between">
            <A href="/dashboard" class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
            </svg>
            </A>  
            <A href="/edit-employee" class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 bg-yellow-200 hover:bg-yellow-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
            </A>
        </div>

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
