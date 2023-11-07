import axios from 'axios'

axios.defaults.headers.common.Authorization = '912ecc06f3604814adf23083f0b03fa8'

const getNewsDetails = async (data) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: data
  })
  return response
}

export default getNewsDetails
