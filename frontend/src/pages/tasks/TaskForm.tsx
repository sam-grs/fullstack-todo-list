import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { create, find, update } from 'services'
import { useNavigate } from 'react-router-dom'

import { Alert, Button, Input, Select, Textarea } from 'components'
import { Modal } from './Modal'
import { initialValues, validationSchema } from './Task.schema'
import { routes } from 'routes'

type TaskProps = typeof initialValues

// arrumar essa tipagem
type TaskFormProps = {
    isOpen: boolean
    setIsOpen: any
    id: number | null
    onUpdate: any
    isEditing: boolean
}

// o token do sessionStorage permanece, melhor jeito é tirar as validacoes

export function TaskForm({ isOpen, setIsOpen, id, onUpdate, isEditing }: TaskFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [task, setTask] = useState<TaskProps>(initialValues)
    const navigate = useNavigate()

    const token = sessionStorage.getItem('token')
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<TaskProps>({
        resolver: zodResolver(validationSchema),
        defaultValues: initialValues,
    })

    useEffect(() => {
        if (!token) {
            Alert({ message: 'Precisa está logado para acessar essa tela', type: 'info' })
            navigate(routes.login)
        }

        if (id) {
            find(
                `tasks/${id}`,
                (data) => {
                    reset(data)
                },
                { headers: { Authorization: token } }
            )
        } else {
            reset(initialValues)
        }
    }, [id, reset, token])

    const onSubmit: SubmitHandler<TaskProps> = async (data: any) => {
        setIsLoading(true)
        console.log('data', data)
        try {
            if (isEditing) {
                await update(`tasks/${id}`, data, setTask, { headers: { Authorization: token } })
                Alert({ message: 'Tarefa atualizada!' })
                onUpdate()
            } else {
                await create('tasks', data, setTask, { headers: { Authorization: token } })
                Alert({ message: 'Tarefa criada!' })
                onUpdate()
            }
        } catch (error: any) {
            Alert({ message: 'O usuário ou senha não estão corretos.', type: 'error' })
            console.error(error)
        } finally {
            setIsLoading(false)
            setIsOpen(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2 className="text-lg font-bold">{isEditing ? 'Editar' : 'Adicionar'} nova Tarefa</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                    <Input
                        name="title"
                        placeholder="Título da tarefa"
                        errors={errors.title}
                        control={control}
                        fullWidth={true}
                    />
                </div>

                <div className="mt-4">
                    <Textarea
                        name="about"
                        control={control}
                        errors={errors.about}
                        placeholder="Descrição da tarefa"
                        fullWidth={true}
                    />
                </div>

                <div className="mt-4">
                    <Select name="status" control={control} values={['pending', 'completed']} fullWidth={true} />
                </div>

                <div className="mt-6 flex justify-between gap-8">
                    <Button fullWidth={true} onClick={() => setIsOpen(false)} bgColor={false}>
                        Sair
                    </Button>
                    <Button fullWidth={true} type="submit">
                        Enviar
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
