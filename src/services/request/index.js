import { api } from 'services/api'

const handleRequest = async (request, errorMessage) => {
  try {
    const result = await request
    return result.data
  } catch (error) {
    console.error(errorMessage, error)
    return { error: errorMessage }
  }
}

export const getList = () =>
  handleRequest(api.get('/list-items'), 'Error ao buscar dados da API')

export const createItem = (item) =>
  handleRequest(
    api.post('/list-item', { ...item }),
    'Error ao salvar novo item'
  )

export const updateItem = (id, item) =>
  handleRequest(
    api.put(`/list-item/${id}`, { ...item }),
    'Error ao atualizar o item'
  )

export const deleteItem = (id) =>
  handleRequest(api.delete(`/list-item/${id}`), 'Error ao deletar item')
