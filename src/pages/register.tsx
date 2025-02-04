import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

const users = [
    { storecode: "002", password: "123" },
    { storecode: "user", password: "password" },
  ];

export default function Register() {
  const [kodeStore, setKodeStore] = createSignal(''); // Menggunakan kode store sebagai variabel
  const [password, setPassword] = createSignal('');
  const [namaStore, setNamaStore] = createSignal('');
  const [areaStore, setAreaStore] = createSignal('');
  const [spvStore, setSpvStore] = createSignal('');
  const [error, setError] = createSignal('');
  
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    
    // Data yang akan dikirim ke backend
    const data = {
      kode_store: kodeStore(), // Menggunakan kode store
      nama_store: namaStore(),
      area_store: areaStore(),
      spv_yang_bertugas: spvStore(),
      password: password(),
    };

    try {
      const response = await fetch('http://127.0.0.1:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Pendaftaran berhasil!');
        // Redirect atau melakukan sesuatu setelah sukses
      } else {
        const errorText = await response.text();
        setError(errorText);  // Menampilkan pesan error jika ada
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menghubungi server');
    }
  };

  const [storecode, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mb-16 md:mt-16 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Buat akun anda</h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label for="kodeStore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Store</label>
                <input
                  type="text"  // Menggunakan type text untuk kode store
                  id="kodeStore"
                  value={kodeStore()}
                  onInput={(e) => setKodeStore(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label for="namaStore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Store</label>
                <input
                  type="text"
                  id="namaStore"
                  value={namaStore()}
                  onInput={(e) => setNamaStore(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label for="areaStore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area Store</label>
                <input
                  type="text"
                  id="areaStore"
                  value={areaStore()}
                  onInput={(e) => setAreaStore(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label for="spvStore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SPV Store</label>
                <input
                  type="text"
                  id="spvStore"
                  value={spvStore()}
                  onInput={(e) => setSpvStore(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password()}
                  onInput={(e) => setPassword(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {error() && <p class="text-red-500 text-sm">{error()}</p>}
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Daftar</button>
              <div class="flex items-center justify-between">
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Sudah punya akun? <A href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</A>
                </p>
                <A href="/" class="text-sm font-light text-gray-500 dark:text-gray-400">Kembali</A>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
