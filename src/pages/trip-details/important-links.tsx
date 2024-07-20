import { Link2, Plus } from "lucide-react";




export function ImportantLinks() {
  return (
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
  )
}
