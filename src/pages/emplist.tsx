import { createSignal } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import userimg from "../assets/img/user.jpeg";

export default function Emplist() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="text-gray-700 p-8">
        <A href="/dashboard" class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Dashboard
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </A>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Foto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Jabatan
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status Aktif
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Store Incharge
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Area Store
                            </th>
                            <th scope="col" class="px-6 py-3">
                                NIK
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Alamat
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Jenis Kelamin
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nomor HP
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={userimg} class="h-24 w-24 object-contain" />
                            </th>
                            <td class="px-6 py-4">
                                Kevin Periyanto
                            </td>
                            <td class="px-6 py-4">
                                Karyawan
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Store
                            </td>
                            <td class="px-6 py-4">
                                Purwokerto
                            </td>
                            <td class="px-6 py-4">
                                2328646648
                            </td>
                            <td class="px-6 py-4">
                                Kebumen
                            </td>
                            <td class="px-6 py-4">
                                Pria
                            </td>
                            <td class="px-6 py-4">
                                08999999
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={userimg} class="h-24 w-24 object-contain" />
                            </th>
                            <td class="px-6 py-4">
                                Kevin Periyanto
                            </td>
                            <td class="px-6 py-4">
                                Karyawan
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Store
                            </td>
                            <td class="px-6 py-4">
                                Purwokerto
                            </td>
                            <td class="px-6 py-4">
                                2328646648
                            </td>
                            <td class="px-6 py-4">
                                Kebumen
                            </td>
                            <td class="px-6 py-4">
                                Pria
                            </td>
                            <td class="px-6 py-4">
                                08999999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={userimg} class="h-24 w-24 object-contain" />
                            </th>
                            <td class="px-6 py-4">
                                Kevin Periyanto
                            </td>
                            <td class="px-6 py-4">
                                Karyawan
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Store
                            </td>
                            <td class="px-6 py-4">
                                Purwokerto
                            </td>
                            <td class="px-6 py-4">
                                2328646648
                            </td>
                            <td class="px-6 py-4">
                                Kebumen
                            </td>
                            <td class="px-6 py-4">
                                Pria
                            </td>
                            <td class="px-6 py-4">
                                08999999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={userimg} class="h-24 w-24 object-contain" />
                            </th>
                            <td class="px-6 py-4">
                                Kevin Periyanto
                            </td>
                            <td class="px-6 py-4">
                                Karyawan
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Store
                            </td>
                            <td class="px-6 py-4">
                                Purwokerto
                            </td>
                            <td class="px-6 py-4">
                                2328646648
                            </td>
                            <td class="px-6 py-4">
                                Kebumen
                            </td>
                            <td class="px-6 py-4">
                                Pria
                            </td>
                            <td class="px-6 py-4">
                                08999999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={userimg} class="h-24 w-24 object-contain" />
                            </th>
                            <td class="px-6 py-4">
                                Kevin Periyanto
                            </td>
                            <td class="px-6 py-4">
                                Karyawan
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Aktif
                            </td>
                            <td class="px-6 py-4">
                                Store
                            </td>
                            <td class="px-6 py-4">
                                Purwokerto
                            </td>
                            <td class="px-6 py-4">
                                2328646648
                            </td>
                            <td class="px-6 py-4">
                                Kebumen
                            </td>
                            <td class="px-6 py-4">
                                Pria
                            </td>
                            <td class="px-6 py-4">
                                08999999
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}
