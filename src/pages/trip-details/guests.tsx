import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../components/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}


export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6">
      <span className="text-lg text-zinc-50 font-semibold">Convidados</span>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100 ">{participant.name ?? `Convidado ${index}`}</span>
                <span className="block text-xs text-zinc-400 truncate">{participant.email}</span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="size-5 shrink-0 text-green-400" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              )
              }

            </div>
          )
        })}

      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5 text-zinc-200" />
        Gerenciar convidados
      </Button>

    </div>
  )
}