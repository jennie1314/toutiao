import axios from 'axios'
import Vue from 'vue'
const http = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
  headers: {
    'content-type': 'application/json'
  },
  timeout: 5000
})

Vue.prototype.$http = http

export default http