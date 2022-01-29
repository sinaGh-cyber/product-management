import Axios from 'axios'

export const loginAPI = ({ email, password }) =>
  Axios.post('http://127.0.0.1:8000/login', {
    email,
    password,
  })

export const getAllProductsAPI = () =>
  Axios.get('http://127.0.0.1:8000/products/')

export const removeProductAPI = (productId) =>
  Axios.delete(`http://127.0.0.1:8000/products/${productId}/`)

export const getChart = () =>
  Axios.get('https://dummy.restapiexample.com/api/v1/employees')
