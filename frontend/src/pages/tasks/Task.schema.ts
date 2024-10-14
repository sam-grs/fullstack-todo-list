import { z } from 'zod'

export const initialValues = {
    title: '',
    about: '',
    status: 'pending',
}

export const validationSchema = z.object({
    title: z.string().min(1, 'Campo obrigatório').max(50, 'Máximo de 50 caracteres'),
    about: z.string().min(1, 'Campo obrigatório').max(1000, 'Máximo de 1000 caracteres'),
    status: z.string(),
})
