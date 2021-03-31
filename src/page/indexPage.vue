<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" @click="questRoute()">小菜答题</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div v-if="routeIndex == 1" class="makeCenterMainBox">
      <mainPage></mainPage>
      <div>{{ userName }}</div>
      <el-button @click="showName">点击</el-button>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div v-else>
      <questionRunoob></questionRunoob>
    </div>
  </div>
</template>

<script>
import {testPost} from '@/api/requestSend'
import mainPage from "./mainPage.vue";
import questionRunoob from "@/components/questionRunoob.vue";

export default {
  name: 'indexPage',
  components: {
    mainPage,
    questionRunoob
  },
  data() {
    return {
      userName: "xxx",
      activeIndex: '1',
      activeIndex2: '1',
      routeIndex:1
    }
  },
  methods: {
    showName() {
      let param = {id: '1'}
      testPost(param).then((data) => {
        this.userName = data.data;
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    questRoute(){
      this.routeIndex = 2;
    }
  }
}
</script>

<style scoped>
  .makeCenterMainBox{
    width:80%;
    margin:0 auto;
  }
</style>
