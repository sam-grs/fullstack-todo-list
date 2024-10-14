import { FC, MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    type?: 'button' | 'reset' | 'submit'
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    fullWidth?: boolean
    className?: string
    bgColor?: boolean
}

export const Button: FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    fullWidth = false,
    bgColor = true,
    className,
    children,
    onClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`  
                border
                border-black
                text-black 
                py-2 px-4 
                rounded
                hover:opacity-90 hover:shadow-md 
              hover:shadow-black/20 active:scale-95
                transition-transform duration-200 ease-in-out
                ${bgColor && 'bg-black text-white'}
                ${fullWidth && 'w-full'}
                ${className}
                `}
        >
            {children}
        </button>
    )
}
