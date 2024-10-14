import { FC } from 'react'
import { Controller } from 'react-hook-form'

type TextareaProps = {
    name: string
    placeholder: string
    fullWidth?: boolean
    control: any
    errors: any
}

export const Textarea: FC<TextareaProps> = ({ name, placeholder, fullWidth = false, control, errors }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <textarea
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
