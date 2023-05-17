import axios from 'axios'

const API_URL = 'https://my-json-server.typicode.com/OusseynouMbaye/swimming-style'

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllSwimmingStyles() {
    return apiClient.get('/styles')
  },

  getSwimmingStyleById(id: number) {
    return apiClient.get('/styles/' + id)
  }
}
