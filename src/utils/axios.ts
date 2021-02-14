import axios, { AxiosInstance } from 'axios'

const _axios: AxiosInstance = axios.create({
  baseURL: 'https://github-jobs.glitch.me/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default _axios
