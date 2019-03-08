import axios from 'axios'
import './http'
import domains from './domains'
/* eslint-disable */
export const homebanner = (p) => axios.post(domains.pro1 + '/haha', {p:p})
// export const homebanner = (p) => axios.get(domains.pro1 + '/123')
