import axios from 'axios'

const baseUrl = 'https://api.openbrewerydb.org/breweries'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObj => {
  return axios.post(baseUrl, newObj)
}

const update = (id, newObj) => {
  return axios.put(`${baseUrl}/${id}`, newObj)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const breweryService = { getAll, create, update, remove }

export default breweryService