<template>
<div>
  <el-row style="text-align: right">
    <el-button type="primary" @click="dialogFormVisible = true">创建问题</el-button>
  </el-row>
  <el-row>
    <el-table
      :data="questionList"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-col :span="4" label-position="left" v-for="(val,ind) in props.row.answerList" inline class="demo-table-expand">
            <el-radio v-model="props.row.questionCorrectAnswer" :disabled="(props.row.questionCorrectAnswer !== val.rank)? true:false" :label=val.rank style="width: 20%;display:inline-block;">{{ val.rank }}. {{val.answerContent}}</el-radio>
          </el-col>
        </template>
      </el-table-column>
      <el-table-column
        label="问题ID"
        v-if="false"
        prop="questionId">
      </el-table-column>
      <el-table-column
        label="序号"
        width="120"
        prop="questionNo">
      </el-table-column>
      <el-table-column
        label="问题描述"
        width="800"
        prop="questionName">
      </el-table-column>
      <el-table-column
        label="正确选项"
        prop="questionCorrectAnswer">
      </el-table-column>
    </el-table>
  </el-row>
<!--  新建问题弹框-->
  <el-dialog title="新建问题" :visible.sync="dialogFormVisible">
    <el-form :model="question">
      <el-form-item label="问题题干" :label-width="formLabelWidth">
        <el-input v-model="question.questionName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item :label=val.answerLabel v-for="(val,ind) in question.answerList" :label-width="formLabelWidth">
        <el-input v-model="val.answerContent" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="正确答案" :label-width="formLabelWidth">
        <el-radio v-model="question.questionCorrectAnswer" label="1">A选项</el-radio>
        <el-radio v-model="question.questionCorrectAnswer" label="2">B选项</el-radio>
        <el-radio v-model="question.questionCorrectAnswer" label="3">C选项</el-radio>
        <el-radio v-model="question.questionCorrectAnswer" label="4">D选项</el-radio>
      </el-form-item>
      <el-form-item label="答案解析" :label-width="formLabelWidth">
        <el-input v-model="question.questionAnswerDescribe" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addQuestion()">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import {getQuestionList,addQuestion} from '@/api/createQuestionRunoo'
export default {
name: "createQuestionRunoob",
  data(){
  return{
    questionList: [],
    dialogFormVisible: false,
    question:{
      questionName:"",
      answerList:[{
        answerLabel:"A选项",
        answerContent:"",
      },{
        answerLabel:"B选项",
        answerContent:"",
      },{
        answerLabel:"C选项",
        answerContent:"",
      },{
        answerLabel:"D选项",
        answerContent:"",
      }],
      questionCorrectAnswer: "",
      questionAnswerDescribe:""
    },
    formLabelWidth: '120px'
  }
  },
  mounted() {
    this.queryQuestionList();
  },
  methods:{
    queryQuestionList(){
      getQuestionList().then((data) => {
        this.questionList = data.data;
      })
    },
    addQuestion(){
      this.dialogFormVisible = false
      let param = {
        questionName:this.question.questionName,
        answerList:this.question.answerList,
        questionCorrectAnswer:this.question.questionCorrectAnswer,
        questionAnswerDescribe:this.question.questionAnswerDescribe
      }
      addQuestion(param).then(()=>{
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '创建'),
            h('i', { style: 'color: teal' }, '成功!')
          ])
        });
        this.queryQuestionList();
      })
    }
  }
}
</script>

<style scoped>

</style>
