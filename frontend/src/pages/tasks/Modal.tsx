import { ReactNode } from 'react'

type ModalProps = {
    isOpen: boolean
    onClose: any
    children: ReactNode
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
            <div className="bg-white rounded-lg p-6 z-20 w-full max-w-lg">{children}</div>
        </div>
    )
}
