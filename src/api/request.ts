import axios, { AxiosRequestConfig } from 'axios'

const host = import.meta.env.VITE_APIHOST // 请求地址公共部分

/**
 * GET请求方法封装
 * @param params
 * @param params.url
 * @param params.responseType
 * @returns Promise
 */
export function GET(config: AxiosRequestConfig<any>) {
  return axios({
    baseURL: host,
    method: 'get',
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
    baseURL: host,
    method: 'post',
    ...config,
  })
}
