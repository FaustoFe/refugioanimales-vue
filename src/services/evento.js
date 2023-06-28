import axios from 'axios'
import config from '../config'

const getEventos = async () => {
  const response = await axios.get(`${config.apiURL}/eventos`)
  return response.data
}

export default {
  getEventos
}