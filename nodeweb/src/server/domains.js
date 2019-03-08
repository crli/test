let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.254.174:3000'
} else {
  baseUrl = 'https://www.baidu.com/'
}
export default {
  'pro1': baseUrl
}
