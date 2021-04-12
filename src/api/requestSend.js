import request from '@/util/request'

export function testPost(param){
  return request({
    url:'api/login',
    method:'post',
    data:param
  })
}
