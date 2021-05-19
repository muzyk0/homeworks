import axios from "axios"

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestsAPI = {
    postRequest: (value: boolean) => instance.post<RequestsType>('auth/test',{success: value})
}

// Types
export type RequestsType = {
    errorText: null | string
    info: null | string
    yourBody: {
        success: null | boolean
    }
    yourQuery: {}
}