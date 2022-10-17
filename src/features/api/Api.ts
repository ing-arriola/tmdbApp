import axios from "axios"

const loginUrl = 'https://reqres.in/api'
const moviesUrl = 'https://api.themoviedb.org/3'
export const imagesUrl = 'https://image.tmdb.org/t/p/w500'

export const loginApi = axios.create({
    baseURL:loginUrl})

export const moviesApi = axios.create({
    baseURL:moviesUrl
})

export const imagesApi = axios.create({
    baseURL:imagesUrl
})
