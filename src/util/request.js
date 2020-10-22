import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.API,
});

export default service
