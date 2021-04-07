import request from '@/util/request'

export function getQuestionList(){
  return request({
    url:'/question/getQuestionList',
    method:'post'
  })
}

export function addQuestion(param){
  return request({
    url:'/question/addQuestion',
    method:'post',
    data:param
  })
}
