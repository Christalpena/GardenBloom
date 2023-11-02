import axios from 'axios'

const flowersApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/flowers/',
})

export const getFlowers = () => {
    return flowersApi.get('/')
}