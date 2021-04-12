import request from '@/util/request'

export function getQuestionList(){
  return request({
    url:'api/question/getQuestionList',
    method:'post'
  })
}

export function addQuestion(param){
  return request({
    url:'api/question/addQuestion',
    method:'post',
    data:param
  })
}
