import request from '@/util/request'

export function testPost(param){
  return request({
    url:'/login',
    method:'post',
    data:param
  })
}
