import { CircleDashed, Plus, UserCog } from "lucide-react";
import { Button } from "../components/button";

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

      <Button variant="secondary" size="full">
        <UserCog className="size-5 text-zinc-200" />
        Gerenciar convidados
      </Button>
      
    </div>
  )
}