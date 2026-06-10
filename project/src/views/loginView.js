import { loginController } from "@controllers/login.controller";

export default function loginView() {
  setTimeout(() => loginController());

  return `
    <div class="min-h-screen flex items-center justify-center bg-slate-900">
      
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-12 w-full max-w-md shadow-xl">

        <h1 class="text-3xl font-bold mb-8 text-center text-cyan-400">
          Iniciar Sesión
        </h1>

        <form id="loginForm" class="flex flex-col gap-4">

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            class="border border-slate-600 bg-slate-700 px-4 py-3 rounded-lg w-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            class="border border-slate-600 bg-slate-700 px-4 py-3 rounded-lg w-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            class="bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300"
          >
            Ingresar
          </button>

        </form>

      </div>

    </div>
  `;
}