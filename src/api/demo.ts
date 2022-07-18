import { GET } from './request'

const host = import.meta.env.VITE_APIHOST

function queryword() {
  return GET({
    baseURL: host,
    url: '/api-wenan-mingrenmingyan/index.php',
    params: {
      aa1: 'json',
    },
  })
}

export default {
  queryword,
}
