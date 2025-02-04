import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

export default function Login() {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [errorMessage, setErrorMessage] = createSignal('');

  const handleLogin = async (event: Event) => {
    event.preventDefault(); // Prevent default form submission

    const response = await fetch('http://127.0.0.1:8080/login', { // Ganti dengan URL BE Anda
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username(),
        password: password(),
      }),
    });

    if (response.ok) {
      // Jika login berhasil, arahkan ke dashboard
      window.location.href = '/dashboard';
    } else {
      // Jika login gagal, tampilkan pesan error
      const message = await response.text();
      setErrorMessage(message);
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Masuk ke akun anda
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input
                  type="text"
                  name="text"
                  onInput={(e) => setUsername(e.target.value)}
                  id="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nama"
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  onInput={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {errorMessage() && (
                <div class="text-red-600 text-sm">{errorMessage()}</div>
              )}
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Masuk
              </button>
              <div class="flex items-center justify-between">
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Belum punya akun? <A href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</A>
                </p>
                <A href="/" class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Kembali
                </A>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
