import request from '@/util/request'

export function uploadFile(params){
  return request({
    url:'api/fileStorage/uploadFile',
    method:'post',
    data:params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}

export function getFileList(params){
  return request({
    url:'api/fileStorage/queryFileList',
    method:'post',
    data:params
  })
}

