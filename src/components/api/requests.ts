import axios from "axios"
import { API } from "./api"

// its better to store this data in env
// but bcz the project is very simple i did put them here 
const baseUrl = 'https://api.fastforex.io'
const api_key = '6ff82b491c-034db48e9b-rabtjv' 

export const getCurrencyRate = async (target: string, comparing: string[]) => {
  const { data } = await axios.get(`${baseUrl}/${API.FETCH_MULTI}/?from=${target}&to=${comparing.join()}&api_key=${api_key}`)
  return data
}

export const getAllCurrencyData = async () => {
  const { data } = await axios.get(`${baseUrl}/${API.FETCH_ALL}/?api_key=${api_key}`)
  return data
}

export const getConvertion = async (amount: string, from: string, to: string) => {
  const { data } = await axios.get(`${baseUrl}/${API.CONVERT}/?from=${from}&to=${to}&amount=${amount}&api_key=${api_key}`)
  return data
}