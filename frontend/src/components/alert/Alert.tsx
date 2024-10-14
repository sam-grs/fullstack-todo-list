import { Slide, toast } from 'react-toastify'

type AlertProps = {
    message: string
    type?: 'success' | 'error' | 'info'
}

export function Alert({ message, type = 'success' }: AlertProps) {
    toast[type](`${message}`, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
    })
}
