import axios from 'axios'
import './http'
import domains from './domains'
/* eslint-disable */
export const homebanner = () => axios.post(domains.home_banner, {})
export const getShopBanner = () => axios.post(domains.getShopBanner, {})
export const getShopNav = (type) => axios.post(domains.getShopNav, {type:type})
export const news = () => axios.post(domains.news, {})
export const shopshow = (id) => axios.post(domains.shopshow, {id:id})
