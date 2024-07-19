import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, UserCog, X } from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(false)
  }



  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-800 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>

          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>

      </div>

      <main className="flex gap-16 px-4">

        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModalOpen} className="bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus className="size-5" />
              Cadastrar atividades
            </button>
          </div>


          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-zinc-500 text-xs">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-zinc-500 text-xs">Domingo</span>
              </div>

              <div className="flex items-center bg-zinc-800 rounded-xl shadow-shape px-4 py-2.5">
                <div className="flex gap-2 px-2">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                </div>

                <span className="ml-auto text-sm">
                  8:00h
                </span>
              </div>

              <div className="flex items-center bg-zinc-800 rounded-xl shadow-shape px-4 py-2.5">
                <div className="flex gap-2 px-2">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Almoço</span>
                </div>

                <span className="ml-auto text-sm">
                  12:00h
                </span>
              </div>

            </div>

          </div>

        </div>


        <div className="w-80 space-y-6">

          <div className="space-y-6">
            <span className="text-lg text-zinc-50 font-semibold">Links Importantes</span>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Reserva do AirBnB</span>
                  <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200" href="#">https://www.airbnb.com.br/rooms/104700011asdddddddddd</a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Reserva do AirBnB</span>
                  <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200" href="#">https://www.airbnb.com.br/rooms/104700011asdddddddddd</a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>

            </div>

            <button className="w-full bg-zinc-800 font-medium h-11 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 ">
              <Plus className="size-5 text-zinc-200" />
              <span>Cadastrar novo link</span>
            </button>
          </div>

          <div className="w-py h-px bg-zinc-800"></div>

          <div className="space-y-6">
            <span className="text-lg text-zinc-50 font-semibold">Convidados</span>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Jessica White</span>
                  <span className="block text-xs text-zinc-400 truncate">jessica.white44@yahoo.com</span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Dr. Rita Pacocha</span>
                  <span className="block text-xs text-zinc-400 truncate">lacy.stiedemann@gmail.com</span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>

            </div>

            <button className="w-full bg-zinc-800 font-medium h-11 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 ">
              <UserCog className="size-5 text-zinc-200" />
              <span>Gerenciar convidados</span>
            </button>
          </div>





        </div>


      </main>

      {isCreateActivityModalOpen ? (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type="button" onClick={closeCreateActivityModalOpen}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Todos convidados podem visualizar as atividades.
              </p>
            </div>

            <form className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400 size-5" />
                <input
                  name="title"
                  placeholder="Qual a atividade"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>


              <div className="h-14 flex-1 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center justify-between gap-2">
                <Calendar className="text-zinc-400 size-5" />
                <input
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Data e horário da atvidade"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]" />
              </div>



              <button type="submit" className="w-full flex items-center justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium hover:bg-lime-400">
                Salvar Atividade

              </button>

            </form>
          </div>
        </div>
      ) : null}



    </div>
  )

}