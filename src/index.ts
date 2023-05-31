import { buildURL } from './helps/url'
import { axiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: axiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: axiosRequestConfig): void {
  config.url = transformUrl(config)
}
function transformUrl(config: axiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
export default axios
