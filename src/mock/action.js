import * as api from './api.js'
import http from 'axios'

import { requestHandle } from '../utils'

const axios = http.create({
  timeout: 15000
  // withCredentials: true //跨域请求携带cookie
})

export function getchartlist (payload) {
  return requestHandle(axios.get(api.FIRSTCHART))
}
export function getlinechart (payload) {
  return requestHandle(axios.post(api.GETLINECHART, payload))
}
