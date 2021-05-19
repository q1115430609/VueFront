<template>
  <div class="indexPage">
    <el-menu :default-active="activeIndex" class="el-menu-demo indexPageMenu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="questRoute(1)">主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" @click="questRoute(2)">小菜答题</el-menu-item>
        <el-menu-item index="2-1" @click="questRoute(3)">小菜录题</el-menu-item>
        <el-menu-item index="2-2" @click="questRoute(4)">存钱罐</el-menu-item>
        <el-menu-item index="2-3" @click="questRoute('exerciseRegister')">运动打卡</el-menu-item>
        <el-menu-item index="2-5" @click="questRoute('fileStorage')">文件存储</el-menu-item>
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">选项4</template>-->
<!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <!--    各个页面-->
    <div v-if="routeIndex == 1" class="midCenterChannel">
      <ShanghaiIndex></ShanghaiIndex>
    </div>
    <div v-if="routeIndex == 2" class="midCenterChannel">
      <QuestionRunoob></QuestionRunoob>
    </div>
    <div v-if="routeIndex == 3" class="midCenterChannel">
      <CreateQuestionRunoob></CreateQuestionRunoob>
    </div>
    <div v-if="routeIndex == 4" class="midCenterChannel">
      <GetAndSaveMoney></GetAndSaveMoney>
    </div>
    <div v-if="routeIndex == 'fileStorage'" class="midCenterChannel">
      <FileStorage></FileStorage>
    </div>
  </div>
</template>

<script>
import {testPost} from '@/api/requestSend'
import QuestionRunoob from "@/components/QuestionRunoob.vue";
import CreateQuestionRunoob from "@/components/CreateQuestionRunoob.vue";
import GetAndSaveMoney from "@/components/GetAndSaveMoney.vue";
import ShanghaiIndex from '@/components/ShanghaiIndex.vue'
import FileStorage from '@/components/FileStorage.vue'
import ExerciseRegister from '@/components/ExerciseRegister.vue'

export default {
  name: 'indexPage',
  components: {
    QuestionRunoob,
    CreateQuestionRunoob,
    GetAndSaveMoney,
    ShanghaiIndex,
    FileStorage,
    ExerciseRegister
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      routeIndex:1
    }
  },
  mounted() {
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    questRoute(val){
      this.routeIndex = val;
    }
  }
}
</script>

<style scoped>
  .indexPage{
    height: 100%;
    background-color: #cccccc;
  }
  .indexPageMenu{
    margin-bottom: 5px;
  }
  .midCenterChannel{
    padding-top:45px;
    width:80%;
    min-height: calc(100% - 111px);
    margin:0 auto;
    background-color: #fff;
  }
</style>
