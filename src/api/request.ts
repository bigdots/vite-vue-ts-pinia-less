import axios, { AxiosRequestConfig } from 'axios'
/**
 * GET请求方法封装
 * @param params
 * @param params.url
 * @param params.responseType
 * @returns Promise
 */
export function GET(config: AxiosRequestConfig<any>) {
  return axios({
    method: 'get',
    baseURL: 'https://api.apiopen.top',
    ...config,
  })
}
/**
 * POST请求方法封装
 * @param params
 * @param params.url
 * @param params.data
 * @returns Promise
 */
export function POST(config: AxiosRequestConfig<any>) {
  return axios({
    method: 'post',
    baseURL: '',
    ...config,
  })
}
