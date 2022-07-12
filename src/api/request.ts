import axios from 'axios'
/**
 * GET请求方法封装
 * @param params
 * @param params.url
 * @param params.responseType
 * @returns Promise
 */
export function GET(params) {
  return axios({
    method: 'get',
    ...params,
  })
}
/**
 * POST请求方法封装
 * @param params
 * @param params.url
 * @param params.data
 * @returns Promise
 */
export function POST(params) {
  return axios({
    method: 'post',
    ...params,
  })
}
