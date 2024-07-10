import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useState } from 'react'

export function App() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }



    return (
        <div className="w-full h-screen flex justify-center items-center bg-pattern bg-center bg-no-repeat">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">

                <div className="flex flex-col items-center gap-3">
                    <img src="/logo.svg" alt="plann.er" />
                    <p className="text-lg">
                        Convide seus amigos e planeje sua próxima viagem! </p>
                </div>

                <div className="space-y-4">
                    <div className=" h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">

                        <div className="flex items-center gap-2 flex-1">

                            <MapPin className='size-5 text-zinc-400' />
                            <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />

                        </div>

                        <div className="flex items-center gap-2 mr-6">

                            <Calendar className='size-5 text-zinc-400 ml-2' />
                            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40
                            outline-none"/>

                        </div>


                        {isGuestsInputOpen ? (
                            <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 ">
                                Alterar local/data
                                <Settings2 className="size-5"/>
                            </button>
                        ): (

                            <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ">
                                Continuar
                                <ArrowRight className="size-5 text-lime-950" />
                            </button>
                        )

                        }


                    </div>

                    {isGuestsInputOpen ? (

                        <div className=" h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">

                            <div className="flex items-center gap-2 flex-1">

                                <UserRoundPlus className='size-5 text-zinc-400' />
                                <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                            </div>

                            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ">
                                Confirmar Viagem
                                <ArrowRight className="size-5 text-lime-950" />
                            </button>

                        </div>

                    ) : null}

                </div>



                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente  concorda <br />
                    com nossos <a href="#" className="text-zinc-300">termos de uso</a> e
                    <a href="#" className="text-zinc-300"> políticas de privacidade.</a>
                </p>

            </div>

        </div>




    )
}

