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

export function deleteQuestion(param){
  return request({
    url:'api/question/deleteQuestion',
    method:'post',
    data:param
  })
}

export function editQuestion(param){
  return request({
    url:'api/question/editQuestion',
    method:'post',
    data:param
  })
}


