import { FC } from 'react'
import { Controller } from 'react-hook-form'

type SelectProps = {
    name: string
    fullWidth?: boolean
    control: any
    values: string[]
}

export const Select: FC<SelectProps> = ({ name, values = [], fullWidth = false, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <select className={`py-2 px-4 border border-black rounded ${fullWidth && 'w-full'}`} {...field}>
                        <option value="Selecione uma opção" disabled>
                            Selecione uma opção
                        </option>
                        {values.map((value) => (
                            <option value={value}>{value}</option>
                        ))}
                    </select>
                </>
            )}
        />
    )
}
