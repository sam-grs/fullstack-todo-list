import { ReactNode } from 'react'

type BoxProps = {
    children: ReactNode
    className?: string
}

const styles = `
    relative 
    box-border 
    max-w-[1440px] 
    m-auto h-full 
    px-8
    py-12
    sm:px-14 
    sm:py-14
`

export function Box({ children, className }: BoxProps) {
    return <div className={`${styles} ${className}`}>{children}</div>
}
