import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
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
  )
}