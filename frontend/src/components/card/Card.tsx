import { FC, ReactNode } from 'react'

type CardProps = {
    title?: string
    children: ReactNode
    className?: string
}

export const Card: FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className={`w-full max-w-[600px] bg-white rounded-lg shadow-xl p-6 ${className}`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    )
}
