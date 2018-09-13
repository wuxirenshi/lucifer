import axios from 'axios'

const base_url = "/lucifer/api";

export function saveBlog(params) {
  return axios.post(`${base_url}/blog`, params)
}
