import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Eye, EyeSlash } from '@phosphor-icons/react'

import { validationSchema, initialValues } from './Register.schema'
import { auth } from 'services'
import { Box, Button, Alert, Input } from 'components'
import { routes } from 'routes'

export type RegisterProps = z.infer<typeof validationSchema>

export const Register: FC = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<RegisterProps>(initialValues)
    const [isLoading, setIsLoading] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)
    const viewPassword = () => setVisiblePassword((prev) => !prev)
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterProps>({
        resolver: zodResolver(validationSchema),
        defaultValues: initialValues,
    })
    console.log('user', user)

    const onSubmit: SubmitHandler<RegisterProps> = async (data: RegisterProps) => {
        console.log('data', data)
        setIsLoading(true)
        try {
            await auth('users/register', data, setUser)
            Alert({ message: 'Usuário cadastrado!' })
        } catch (error: any) {
            Alert({ message: 'O email já existe, por favor cadastre outro.', type: 'error' })
            console.error(error)
        } finally {
            setIsLoading(false)
            navigate(routes.login)
        }
    }

    return (
        <div className="grid grid-cols-2">
            <Box className="bg-black w-full h-screen"> </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="flex flex-col justify-center max-w-[450px] h-full gap-4">
                    <h1 className="text-3xl text-center mb-2">Cadastrar</h1>
                    <div>
                        <Input
                            name="name"
                            placeholder="Digite seu nome"
                            fullWidth={true}
                            errors={errors.name}
                            control={control}
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Digite seu email"
                            fullWidth={true}
                            errors={errors.email}
                            control={control}
                        />
                        <div className="relative">
                            <Input
                                name="password"
                                type={visiblePassword ? 'text' : 'password'}
                                placeholder="Digite sua senha"
                                fullWidth={true}
                                errors={errors.password}
                                control={control}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer h-11"
                                onClick={viewPassword}
                            >
                                {visiblePassword ? <Eye size={22} /> : <EyeSlash size={22} />}
                            </span>
                        </div>

                        <div className="flex gap-3 mt-6 mb-4">
                            <Button
                                bgColor={false}
                                onClick={() => navigate(routes.login)}
                                fullWidth={true}
                                type="submit"
                            >
                                Voltar
                            </Button>
                            <Button fullWidth={true} type="submit">
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Box>
            </form>
        </div>
    )
}
