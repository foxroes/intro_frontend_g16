import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetData = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const asyncData = async () => {
      const res = await axios.get(url)
      setData(res.data)
    }
    asyncData()
  }, [])

  return data
}

export default useGetData
