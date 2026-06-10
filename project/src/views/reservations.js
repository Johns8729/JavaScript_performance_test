import Sidebar from "@components/Sidebar";
import { reservationController } from "@controllers/reservation.controller";

export default function reservationsView() {
  setTimeout(() => reservationController());

  return `
    <div class="flex">
      ${Sidebar()}

      <main class="flex-1 bg-slate-900 min-h-screen flex items-center justify-center p-8">

        <div class="w-full max-w-2xl">

          <h1 class="text-4xl font-bold text-cyan-400 text-center mb-8">
            Nueva Reserva
          </h1>

          <form
            id="reservationForm"
            class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl flex flex-col gap-5"
          >

            <div>
              <label class="block text-sm font-medium mb-2 text-white">
                Espacio
              </label>
              <input
                type="text"
                name="workspace"
                placeholder="Ej: Sala A"
                required
                class="border border-slate-600 bg-slate-700 text-white placeholder-slate-400 w-full px-4 py-3 rounded-lg"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-2 text-white">
                Fecha
              </label>
              <input
                type="date"
                name="date"
                required
                class="border border-slate-600 bg-slate-700 text-white w-full px-4 py-3 rounded-lg"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">

              <div>
                <label class="block text-sm font-medium mb-2 text-white">
                  Hora inicio
                </label>
                <input
                  type="time"
                  name="startHour"
                  required
                  class="border border-slate-600 bg-slate-700 text-white w-full px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2 text-white">
                  Hora fin
                </label>
                <input
                  type="time"
                  name="endHour"
                  required
                  class="border border-slate-600 bg-slate-700 text-white w-full px-4 py-3 rounded-lg"
                />
              </div>

            </div>

            <div>
              <label class="block text-sm font-medium mb-2 text-white">
                Motivo
              </label>
              <input
                type="text"
                name="reason"
                placeholder="Ej: Sprint Planning"
                required
                class="border border-slate-600 bg-slate-700 text-white placeholder-slate-400 w-full px-4 py-3 rounded-lg"
              />
            </div>

            <button
              type="submit"
              class="bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
            >
              Crear Reserva
            </button>

          </form>

        </div>

      </main>
    </div>
  `;
}