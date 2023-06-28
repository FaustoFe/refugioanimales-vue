import axios from 'axios'
import config from '../config'

const getTipoAnimal = async () => {
  const response = await axios.get(`${config.apiURL}/tipos_animales`)
  return response.data
}

export default {
  getTipoAnimal
}