import request from '@/util/request'

export function testPost(params){
  return request({
    url:'api/login/testGetMethod',
    method:'post',
    data:params
  })
}

export function loginUp(params){
  return request({
    url:'api/login/loginUp',
    method:'post',
    data:params
  })
}

export function loginIn(params){
  return request({
    url:'api/login/loginIn',
    method:'post',
    data:params
  })
}


export function initLift(params){
  return request({
    url:'api/electricalLift/initLift',
    method:'post',
    data:params
  })
}
