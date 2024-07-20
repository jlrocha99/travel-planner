import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
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
  )
}