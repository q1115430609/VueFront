<template>
  <div class="questionRunoob">
    <el-row>
      <el-col :span="24" v-for="(question,ind) in questionList" style="margin: 20px 0;">
        <el-col style="text-align: left;margin-left: 20%;">{{question.questionNo}}. {{question.questionName}}</el-col>
        <el-row>
          <el-radio-group v-model="question.returnAnswer" v-for="(answer,i) in question.questionAnswerList">
            <el-radio :label="answer.answerId" style="margin: 10px 20px;" @change="checkAnswer(ind,i)">{{answer.answerNo}}. {{answer.answerContent}}</el-radio>
          </el-radio-group>
        </el-row>
        <el-row v-if="question.rightOrMis != ''">
          {{question.rightOrMis}}
          <el-button type="primary" @click="showAnalyse(ind)">看看解析</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "questionRunoob",
  data() {
    return{
      questionList:[{
        questionId:'1',
        questionNo:'01',
        questionName:'CPU访问主存的方式是___',
        questionAnswerList:[{
          answerId:"1",
          answerNo:"A",
          answerContent:"直接访问"
        },{
          answerId:"2",
          answerNo:"B",
          answerContent:"间接访问"
        },{
          answerId:"3",
          answerNo:"C",
          answerContent:"随机访问"
        },{
          answerId:"4",
          answerNo:"D",
          answerContent:"不访问"
        }],
        questionCorrectAnswer:'2',
        questionAnswerDescribe:"RAM又称随机存储器",
        returnAnswer:"",
        rightOrMis:"",
      },{
        questionId:'2',
        questionNo:'02',
        questionName:'CPU访问主存的方式是___',
        questionAnswerList:[{
          answerId:"1",
          answerNo:"A",
          answerContent:"直接访问"
        },{
          answerId:"2",
          answerNo:"B",
          answerContent:"间接访问"
        },{
          answerId:"3",
          answerNo:"C",
          answerContent:"随机访问"
        },{
          answerId:"4",
          answerNo:"D",
          answerContent:"不访问"
        }],
        questionCorrectAnswer:'2',
        questionAnswerDescribe:"RAM又称随机存储器",
        returnAnswer:"",
        rightOrMis:"",
      },],
    }
  },
  methods:{
    checkAnswer(ind,i){
      let riList = ['好厉害啊！',"厉害了！","666哇！"];
      let misList = ['真菜啊！',"太菜了吧！","菜中菜！"];
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
    }
  }
}
</script>

<style scoped>
.questionRunoob{
  width:80%;
  margin: 0 auto;
}
</style>
