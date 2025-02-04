import { createSignal, onCleanup, createEffect } from 'solid-js';
import { A } from '@solidjs/router';
import userimg from "../assets/img/user.jpeg";


export default function Editemplist() {
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
            <A href="/employee" class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
            </A>       
            <form class="lg:w-96 mb-5 mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <input type="search" id="default-search" class="block w-full p-3 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari dengan ID" required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4 text-white-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </form>
            <A href="/dashboard" class="flex py-2.5 px-5 ml-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 bg-yellow-200 hover:bg-yellow-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
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
