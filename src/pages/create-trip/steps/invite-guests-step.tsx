import { ArrowRight, UserRoundPlus } from "lucide-react"

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  OpenConfirmTripModal: () => void

}

export function InviteGuestsStep({
  openGuestsModal,
  emailsToInvite,
  OpenConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className=" h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">

      <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 text-left">

        <UserRoundPlus className='size-5 text-zinc-400' />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-400 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
        )}

      </button>

      <button onClick={OpenConfirmTripModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ">
        Confirmar Viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>

    </div>
  )
}