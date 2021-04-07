<template>
  <div class="questionRunoob">
    <el-row>
      <el-col :span="24" v-for="(question,ind) in questionList" style="margin: 20px 0;">
        <el-col style="text-align: left;margin-left: 20%;">{{question.questionNo}}. {{question.questionName}}</el-col>
        <el-row>
          <el-radio-group v-model="question.returnAnswer" v-for="(answer,i) in question.answerList">
            <el-radio :label="answer.rank" style="margin: 10px 20px;" @change="checkAnswer(ind,i)">{{answer.rank}}. {{answer.answerContent}}</el-radio>
          </el-radio-group>
        </el-row>
        <el-row v-if="question.rightOrMis != ''">
          {{question.rightOrMis}}
          <el-button type="primary" size="small" @click="showAnalyse(ind)">看看解析</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getQuestionList} from '@/api/createQuestionRunoo'
export default {
  name: "questionRunoob",
  data() {
    return{
      questionList:[{
        questionId:'1',
        questionNo:'01',
        questionName:'CPU访问主存的方式是___',
        answerList:[{
          answerId:"1",
          rank:"A",
          answerContent:"直接访问"
        }],
        questionCorrectAnswer:'2',
        questionAnswerDescribe:"RAM又称随机存储器",
        returnAnswer:"",
        rightOrMis:"",
      }],
    }
  },
  mounted() {
    this.queryQuestionList()
  },
  methods:{
    checkAnswer(ind,i){
      let riList = ['好厉害啊！',"厉害了！","666哇！"];
      let misList = ['真菜啊！',"太菜了吧！","菜中菜！"];
      console.log("dasads",this.questionList[ind].returnAnswer,this.questionList[ind].questionCorrectAnswer)
      if(this.questionList[ind].returnAnswer == this.questionList[ind].questionCorrectAnswer){
        this.questionList[ind].rightOrMis = riList[parseInt(Math.random() * 3)];
      }else{
        this.questionList[ind].rightOrMis = misList[parseInt(Math.random() * 3)]
      }
    },
    showAnalyse(ind){
      this.$alert('<strong>'+ this.questionList[ind].questionAnswerDescribe +'</strong>', '答案解析', {
        dangerouslyUseHTMLString: true
      });
    },
    queryQuestionList(){
      getQuestionList().then((data) => {
        this.questionList = data.data;
      })
    },
  }
}
</script>

<style scoped>
.questionRunoob{
  width:80%;
  margin: 0 auto;
}
</style>
