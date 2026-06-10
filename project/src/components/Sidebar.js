import { removeSession } from "@/utils";
import { navigateTo } from "@/router/router";

export default function Sidebar() {
  setTimeout(() => {
    document.querySelector("#logoutBtn")?.addEventListener("click", () => {
      removeSession();
      navigateTo("/");
    });
  });

  return `
    <aside class="w-64 bg-slate-800 text-white min-h-screen p-6 flex flex-col shadow-xl">

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-cyan-400">
          Sistema de Reservas
        </h2>
        <p class="text-slate-400 text-sm mt-1">
          Panel de gestión
        </p>
      </div>

      <nav class="flex flex-col gap-3">

        <a
          href="/home"
          data-link
          class="px-4 py-3 bg-slate-700 rounded-lg hover:bg-cyan-600 transition"
        >
          Panel
        </a>

        <a
          href="/reservations"
          data-link
          class="px-4 py-3 bg-slate-700 rounded-lg hover:bg-cyan-600 transition"
        >
          Nueva Reserva
        </a>

      </nav>

      <button
        id="logoutBtn"
        class="mt-auto px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition text-white"
      >
        Cerrar sesión
      </button>

    </aside>
  `;
}
