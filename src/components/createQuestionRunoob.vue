<template>
<div>
  <el-row style="text-align: right">
    <el-button type="primary">创建问题</el-button>
  </el-row>
  <el-row>
    <el-table
      :data="questionList"
      border
      style="width: 100%">
      <el-table-column
        prop="questionId"
        label="ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="questionNo"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="questionName"
        label="内容"
        width="120">
      </el-table-column>
      <el-table-column
        prop="questionCorrectAnswer"
        label="正确答案"
        width="120">
      </el-table-column>
      <el-table-column
        prop="questionAnswerDescribe"
        label="答案解析"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit()">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</div>
</template>

<script>
import {} from '@/api/requestSend'
export default {
name: "createQuestionRunoob",
  data(){
  return{
    questionList: []
  }
  },
  mounted() {
    this.queryQuestionList();
  },
  methods:{
    queryQuestionList(){
      selectQuestionList().then((data) => {
        console.log("dsada",data)
        this.questionList = data.data;
      });
    }
  }
}
</script>

<style scoped>

</style>
