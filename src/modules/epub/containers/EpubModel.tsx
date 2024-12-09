import { Dialog, Transition } from "@headlessui/react"
import { ModalProvider, useModal } from "@lib/context/modal-context"
import X from "@modules/common/icons/x"
import React, { Fragment } from "react"

type EpubModalProps = {
  isOpen: boolean
  close: () => void
}

type EpubTitleProps = {
  toggleFullScreen: () => void
  setFontSize: () => void
}

const EpubModal: React.FC<EpubModalProps> & {
  Title: React.FC<EpubTitleProps>
  Body: React.FC
} = ({ isOpen, close, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[75]" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  "flex flex-col rounded-3xl justify-start w-full h-full transform overflow-auto bg-white p-10 text-left align-middle shadow-xl transition-all max-h-[100vh]"}
                style={{ background: "#d9fae9" }}
              >
                <ModalProvider close={close}>{children}</ModalProvider>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const Title: React.FC<EpubTitleProps> = ({ toggleFullScreen, setFontSize, children }) => {
  const { close } = useModal()

  return (
    <Dialog.Title className="flex items-center justify-between">
      <div className="text-large-semi">{children}</div>
      <div>
        <button onClick={close}>
          <X size={20} />
        </button>
      </div>
    </Dialog.Title>
  )
}

const Body: React.FC = ({ children }) => {
  return <div className="flex-1">{children}</div>
}

EpubModal.Title = Title
EpubModal.Body = Body

export default EpubModal
