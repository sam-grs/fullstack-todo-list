import axios from 'axios'

const backendAPI = axios.create({ baseURL: 'http://localhost:4000/' })

export const auth = async (url: string, data: object, setData: (data: any) => void) => {
    const response = await backendAPI.post(url, data)
    setData(response.data)
}

export const create = async (url: string, data: object, setData: (data: any) => void, header: object) => {
    const response = await backendAPI.post(url, data, header)
    setData(response.data)
}

export const find = async (url: string, setData: (data: any) => void, header: object) => {
    const response = await backendAPI.get(url, header)
    setData(response.data)
}

// ver se precisa mudar
export const update = async (url: string, data: object, setData: (data: any) => void, header: object) => {
    const response = await backendAPI.post(url, data, header)
    setData(response.data)
}

export const del = async (url: string, header: object) => {
    await backendAPI.delete(url, header)
}
