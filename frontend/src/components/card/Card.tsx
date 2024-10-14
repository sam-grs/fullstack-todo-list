import { FC, ReactNode } from 'react'

type CardProps = {
    title?: string
    children: ReactNode
}

export const Card: FC<CardProps> = ({ title, children }) => {
    return (
        <div className={`w-full max-w-[600px] bg-white rounded-lg shadow-xl p-6`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700">{children}</p>
        </div>
    )
}
