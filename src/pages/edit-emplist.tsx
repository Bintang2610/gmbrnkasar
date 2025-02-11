import { createSignal, onCleanup, createEffect } from 'solid-js';
import { A } from '@solidjs/router';
import DelButton from "../assets/img/delete";
import userimg from "../assets/img/user.jpeg";
import hapus from "../assets/img/delete.svg";


export default function Editemplist() {
  const [dataKaryawan, setDataKaryawan] = createSignal([]);

  const [isOpen, setIsOpen] = createSignal(false);

  const [isPlus, setIsPlus] = createSignal(false);

  const openModalWithDelay = () => {
    setTimeout(() => setIsOpen(true), 100); // Delay 1 detik sebelum modal muncul
  }; 
  
  const openModalWithDelay2 = () => {
    setTimeout(() => setIsPlus(true), 100); // Delay 1 detik sebelum modal muncul
  };

  
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

  const [image, setImage] = createSignal(null);
  let fileInputRef;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("File harus berupa JPG, JPEG, atau PNG!");
    }
  };

  // Panggil fetchDataKaryawan saat komponen dimuat
  createEffect(() => {
    fetchDataKaryawan();
  });

  return (
    <section class="text-gray-700 p-8">
        <div class="flex items-center justify-between">
          <div class="m-0">
          <A href="/employee" class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
            </A>   
          </div>
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
            <button onClick={openModalWithDelay2} class="flex py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg class="w-4 h-4 text-white-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>            
            </button>
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
                <th scope="col" class="px-6 py-3">
                  <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </th>
                <th scope="col" class="px-6 py-3">
                  <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </th>
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
                <td class="px-6 py-4">
                    <button onClick={openModalWithDelay} class="flex py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 bg-yellow-200 hover:bg-yellow-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                    </button>
                  </td>
                <td class="px-6 py-4">
                    <button class="flex py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 bg-red-400 hover:bg-red-800 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>
                  </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isOpen() && (
        <div class="fixed inset-0 border-dashed flex items-center justify-center bg-black bg-opacity-50">
          <div class="relative overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
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
                  <td class="px-6 py-4">
                    <input value={karyawan.nama} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.jabatan} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.status} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.status_aktif} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.store_incharge} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.area_store} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.nik} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.alamat} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.jenis_kelamin} />
                  </td>
                  <td class="px-6 py-4">
                    <input value={karyawan.nomor_hp} />
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
              <div class="flex">
                <button
                  class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Simpan
                </button>
                <button
                  class="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Batal
                </button>
              </div>
          </div>
        </div>
      )}

      {isPlus() && (
        <div class="fixed inset-0 border-dashed flex items-center justify-center bg-black bg-opacity-50">
          <div class="relative overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      class="hidden"
                    />
                    <button
                      class="relative border-2 border-gray-300 rounded-lg overflow-hidden group"
                      onClick={() => fileInputRef.click()}
                    >
                      {/* Gambar yang dipilih atau placeholder */}
                      <img
                        src={ "https://via.placeholder.com/150"}
                        alt="Upload"
                        class="w-24 h-24 object-cover transition duration-300 object-contain group-hover:brightness-75"
                      />
                      
                      {/* Overlay teks saat hover */}
                      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span class="text-white font-semibold">Upload Gambar</span>
                      </div>
                    </button>
                  </th>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                  <td class="px-6 py-4">
                    <input class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm" />
                  </td>
                </tr>
            </tbody>
        </table>
              <div class="flex">
                <button
                  class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={() => setIsPlus(false)}
                >
                  Tambah
                </button>
                <button
                  class="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => setIsPlus(false)}
                >
                  Batal
                </button>
              </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
