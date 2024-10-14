import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Eye, EyeSlash } from '@phosphor-icons/react'

import { validationSchema, initialValues } from './Login.schema'
import { auth } from 'services'
import { Box, Button, Alert, Input } from 'components'
import { routes } from 'routes'

export type LoginProps = z.infer<typeof validationSchema>

export const Login: FC = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<LoginProps & { token?: string }>(initialValues)
    const [isLoading, setIsLoading] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)
    const viewPassword = () => setVisiblePassword((prev) => !prev)
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginProps>({
        resolver: zodResolver(validationSchema),
        defaultValues: initialValues,
    })

    const onSubmit: SubmitHandler<LoginProps> = async (data: LoginProps) => {
        console.log('data', data)
        setIsLoading(true)
        try {
            await auth('users/login', data, setUser)
            localStorage.setItem('token', user.token as string)
            Alert({ message: 'Usuário logado!' })
        } catch (error: any) {
            Alert({ message: 'O usuário ou senha não estão corretos.', type: 'error' })
            console.error(error)
        } finally {
            setIsLoading(false)
            navigate(routes.tasks)
        }
    }

    return (
        <div className="grid grid-cols-2">
            <Box className="bg-black w-full h-screen"> </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="flex flex-col justify-center max-w-[450px] h-full gap-4">
                    <h1 className="text-3xl text-center mb-2">Login</h1>
                    <div>
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
                        <h4 className="text-center my-4">
                            Não possui um cadastro?{' '}
                            <Link className="text-neutral-500 pointer hover:underline" to={routes.register}>
                                Cadastre-se
                            </Link>
                        </h4>
                        <Button fullWidth={true} type="submit">
                            Enviar
                        </Button>
                    </div>
                </Box>
            </form>
        </div>
    )
}
