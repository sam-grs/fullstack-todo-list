import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { Alert, Box, Button, Card } from 'components'
import { TaskForm } from './TaskForm'
import { del, find } from 'services'
import { routes } from 'routes'
import { formatDate } from 'utils'

export function Task() {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [lists, setLists] = useState([])
    const [id, setId] = useState<number | null>(null)
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            Alert({ message: 'Precisa está logado para acessar essa tela', type: 'info' })
            navigate(routes.login)
        }

        findList()
    }, [])

    async function findList() {
        try {
            find('tasks', setLists, { headers: { Authorization: token } })
        } catch (error: any) {
            if (error.response?.status === 401) {
                Alert({ message: 'Precisa estar logado para acessar essa tela', type: 'info' })
                navigate(routes.login)
            } else {
                console.error('Erro ao buscar tarefas: ', error)
            }
        }
    }

    const handleEdit = (taskId: number) => {
        setId(taskId)
        setIsEditing(true)
        setIsOpen(true)
    }

    const handleAdd = () => {
        setId(null)
        setIsEditing(false)
        setIsOpen(true)
    }

    async function handleDelete(id: string) {
        try {
            await del(`tasks/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            Alert({ message: 'Tarefa apagada com sucesso' })
            findList()
        } catch {
            Alert({ message: 'Erro ao apagar a Tarefa' })
        }
    }

    return (
        <div className="h-screen">
            <Box>
                <div className="flex justify-between mb-6">
                    <h1 className="font-bold text-2xl">Todo List</h1>
                    <Button onClick={handleAdd}>Adicionar tarefa</Button>
                </div>

                <div className="grid grid-cols-3 items-center gap-6">
                    {lists.map((item: any) => (
                        <Card key={item.id} title={item.title} className="flex flex-col h-full">
                            <div className="flex-grow h-full">
                                <div className="flex justify-between mb-3">
                                    <p className="text-gray-700">
                                        <strong>Status:</strong> {item.status === 'pending' ? 'pendente' : 'completo'}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Data: </strong>
                                        {formatDate(item.date_time)}
                                    </p>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Descrição:</strong> {item.about}
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Button
                                    onClick={() => handleEdit(item.id)}
                                    className="flex justify-center items-center pr-6 max-w-[150px] w-full"
                                >
                                    <PencilSimple size={20} className="mr-2" /> Editar
                                </Button>
                                <Button
                                    bgColor={false}
                                    onClick={() => handleDelete(item.id)}
                                    className="flex justify-center items-center pr-6 max-w-[150px] w-full"
                                >
                                    <Trash size={20} className="mr-2" />
                                    Deletar
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Box>
            <TaskForm isOpen={isOpen} setIsOpen={setIsOpen} id={id} onUpdate={findList} isEditing={isEditing} />
        </div>
    )
}
