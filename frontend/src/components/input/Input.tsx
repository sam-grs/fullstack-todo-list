import { FC } from 'react'
import { Controller } from 'react-hook-form'

type InputProps = {
    name: string
    type?: 'text' | 'email' | 'password' | 'date' | 'number'
    placeholder: string
    fullWidth?: boolean
    control: any
    errors: any
}

export const Input: FC<InputProps> = ({ type = 'text', fullWidth = false, name, placeholder, control, errors }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={`py-2 px-4 border border-black rounded ${fullWidth && 'w-full'}`}
                        {...field}
                    />
                    <p className="text-red-500 mb-3">{errors?.message}</p>
                </>
            )}
        />
    )
}
