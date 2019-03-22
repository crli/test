import axios from 'axios'
import './http'
import domains from './domains'
/* eslint-disable */
export const infoList = (p) => axios.post(domains.pro1 + '/testpost', {p:p})
