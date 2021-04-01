import request from '@/util/request'

export function selectQuestionList(param){
  return request({
    url:'/question/getQuestionList',
    method:'post',
    data:param
  })
}
