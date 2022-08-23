import axios from 'axios'

const fetchData = async () => {
  const req = await window.fetch('https://restcountries.com/v3.1/all')
  const res = req.json()

  return res
}

const axiosData = async (URI) => {
  const { data } = await axios.get(URI)
  return data
}
export { fetchData, axiosData }
