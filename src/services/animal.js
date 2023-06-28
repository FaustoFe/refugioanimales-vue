import axios from 'axios'
import config from '../config'

const getAnimales = async ({ edad, sexo, tipo }) => {
  const url = new URL(`${config.apiURL}/animales`)
  if (edad) url.searchParams.append('edad', edad)
  if (sexo) url.searchParams.append('sexo', sexo)
  if (tipo) url.searchParams.append('tipo', tipo)
  const response = await axios.get(url)
  return response.data
}

const getAnimalById = async (id) => {
  const response = await axios.get(`${config.apiURL}/animales/${id}`)
  return (response.data[0]) ? response.data[0] : null
}

export default {
  getAnimales,
  getAnimalById
}