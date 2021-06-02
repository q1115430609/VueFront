<template>
  <div class="ElectricalLift">
    <el-input v-model="liftNum" placeholder="请输入内容"></el-input>
    <el-button @click="initLiftMethod()">启动</el-button>
  </div>
</template>

<script>
import {initLift} from '@/api/requestSend'
export default {
  name: "ElectricalLift",
  data(){
    return{
      liftNum:0,
    }
  },
  methods:{
    initLiftMethod(){
      let params = {num:this.liftNum};
      initLift(params).then((data)=>{

      })
    }
  }
}
</script>

<style scoped>

</style>
