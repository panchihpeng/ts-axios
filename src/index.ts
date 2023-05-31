import { buildURL } from './helps/url'
import { axiosRequestConfig } from './types'
import { transformRequest } from './helps/data'
import xhr from './xhr'
function axios(config: axiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: axiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}
function transformUrl(config: axiosRequestConfig): string {
  console.log(config, 'url,,,')
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: axiosRequestConfig) {
  return transformRequest(config.data)
}
export default axios
