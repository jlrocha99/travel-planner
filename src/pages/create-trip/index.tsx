import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {
  const navigate = useNavigate()


  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)


  const [emailsToInvite, setEmailsToInvite] = useState([
    'madsmikkelsen@hotmail.com',
    'willgrahm@hotmail.com',
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestModalOpen(false)
  }

  function OpenConfirmTripModal() {
    setIsConfirmTripModalOpen(true)

  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)

  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return (
        alert("Email já cadastrado")
      )
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)

  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/trips/123')
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
          
          <DestinationAndDateStep
            isGuestsInputOpen = {isGuestsInputOpen}
            closeGuestsInput = {closeGuestsInput}
            openGuestsInput = {openGuestsInput}
          />
          
          {isGuestsInputOpen ? (
            <InviteGuestsStep  
              openGuestsModal={openGuestsModal}
              emailsToInvite={emailsToInvite}
              OpenConfirmTripModal={OpenConfirmTripModal}
            />

          ) : null}

        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente  concorda <br />
          com nossos <a href="#" className="text-zinc-300">termos de uso</a> e
          <a href="#" className="text-zinc-300"> políticas de privacidade.</a>
        </p>

      </div>

      {isGuestModalOpen ? (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
         />
        
      ) : null}

      {isConfirmTripModalOpen ? (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal} 
          createTrip={createTrip}
          
         />
        
      ): null}

    </div>

  )
}

