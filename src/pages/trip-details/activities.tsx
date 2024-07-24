import { Activity, CircleCheck } from "lucide-react";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]

}

export function Activities() {

  const { tripId } = useParams()
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`)
    .then(response => setActivities(response.data.activities))
  }, [tripId])

  return (
    <div className="space-y-8">
      {activities.map(category => {
        return (
          <div key={category.date} className="space-y-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-300 font-semibold">Dia {format(category.date, 'd')}</span>
              <span className="text-zinc-500 text-xs">{format(category.date, 'EEE', { locale: ptBR })}</span>
            </div>
            {category.activities.length > 0 ? (
              <div>
                {category.activities.map(Activity => {
                  return (

                    <div key={Activity.id} className="space-y-2.5">
                      <div className="flex items-center gap-3 bg-zinc-900 rounded-xl shadow-shape px-4 py-2.5 mt-4">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">{Activity.title}</span>
                        <span className="text-zinc-400 ml-auto text-sm">
                          {format(Activity.occurs_at, 'HH:mm')}h
                        </span>
                      </div>

                    </div>
                  )
                })}

              </div>


            ) : (
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            )}

          </div>
        )
      })}

    </div>
  )
}