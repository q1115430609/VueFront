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
      <el-col :span="3" style="float:right;line-height: 60px;">
        <el-button type="text" @click="loginPannel(1)">登录</el-button>
        <el-button type="text" @click="loginPannel(0)">注册</el-button>
      </el-col>
      <el-col :span="2" style="float: right;line-height: 60px;font-size: 12px;">当前用户：<span style="font-size: 13px;">{{loginUserName}}</span></el-col>
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
    <!-- 登录注册面板 -->
    <el-dialog
      :title="loginPannelTile"
      :visible.sync="loginPannelVisible"
      width="30%"
      :before-close="loginPannelClose">
      <el-form label-position="left" :rules="loginPannelRules" label-width="80px" :model="loginVal">
        <el-form-item label="用户名" prop="userId">
          <el-input v-model="loginVal.userId" style="width: 70%;float: left;"></el-input>
        </el-form-item>
        <el-form-item v-if="loginUpOrIn == false" label="昵称"  prop="userName">
          <el-input v-model="loginVal.userName" style="width: 70%;float: left;"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="passWord">
          <el-input v-model="loginVal.passWord" show-password style="width: 75%;float: left;"></el-input>
        </el-form-item>
        <el-form-item v-if="loginUpOrIn == false" label="确认密码" prop="passWordAgain">
          <el-input v-model="loginVal.passWordAgain" show-password style="width: 75%;float: left;"></el-input>
        </el-form-item>
        <el-form-item v-if="loginUpOrIn == false" label="邮箱" prop="email">
          <el-input v-model="loginVal.email" style="width: 75%;float: left;"></el-input>
        </el-form-item>
        <el-form-item v-if="loginUpOrIn == false" label="电话" prop="phone">
          <el-input v-model="loginVal.phone" style="width: 75%;float: left;"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginPannelVisible = false">取 消</el-button>
        <el-button v-if="loginUpOrIn" type="primary" @click="loginUpMethod()">登 录</el-button>
        <el-button v-else type="primary" @click="loginInMethod()">注 册</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {testPost,loginUp,loginIn} from '@/api/requestSend'
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
    let confimPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.loginVal.passWord) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      activeIndex: '1',
      activeIndex2: '1',
      routeIndex:1,
      loginPannelVisible:false,
      loginUpOrIn:true,
      loginPannelTile:"用户登录",
      loginUserName:"未登录",
      loginVal:{
        userId:"",
        passWord:"",
        passWordAgain:"",
        userName:"",
        email:"",
        phone:""
      },
      loginPannelRules:{
        userId: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        passWordAgain: [
          { validator: confimPassword,required: true, trigger: 'blur' }
        ],
        email:[
          { required: false, message: '输入邮箱方便找回密码', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        phone: [
          { required: false, message: '联系电话', trigger: 'blur' },
        ]
      },
    }
  },
  mounted() {
    let loginMeassage = JSON.parse(sessionStorage.getItem("loginMessage"))
    console.log(sessionStorage)
    if(loginMeassage != null){
      this.loginUserName = loginMeassage.userName;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    questRoute(val){
      this.routeIndex = val;
    },
    loginPannel(val){
      if(val){
        // 登录
        this.loginPannelTile = "用户登录";
        this.loginUpOrIn = true;
      }else{
        // 注册
        this.loginPannelTile = "注册用户";
        this.loginUpOrIn = false;
      }
      this.loginVal = {userId:"",passWord:"",passWordAgain:"",userName:"",email:"",phone:""};
      this.loginPannelVisible = true;
    },
    loginPannelClose(){
      this.loginPannelVisible = false;
    },
    //登录用户确定
    loginUpMethod(){
      let params = this.loginVal;
      let that = this;
      loginUp(params).then((data)=>{
        if(data.data != ""){
          that.loginUserName = data.data.userName;
          this.$message("登录成功！");
          that.loginPannelVisible = false;
          sessionStorage.setItem("loginMessage",JSON.stringify(data.data));
        }else{
          this.$message("用户名或密码不正确！");
        }
      })
    },
    //注册用户确定
    loginInMethod(){
      let params = this.loginVal;
      let that = this;
      loginIn(params).then((data)=>{
        if(data.data.data == "用户创建成功！"){
          that.loginPannelVisible = false;
        }
        this.$message(data.data.data);
      })
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
