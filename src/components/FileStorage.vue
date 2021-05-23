<template>
<div class="FileStorage">
  <el-row>
    <el-col v-for="val in fileList" :key="ind"></el-col>
    <el-button type="primary">新建文件夹</el-button>
  </el-row>
  <el-row>
    <el-upload
      id="fileUpload"
      ref="fileUpload"
      class="upload-demo"
      drag
      name="uploadFiles"
      action=""
      :http-request="fileUpload"
      :auto-upload="false"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </el-row>
</div>
</template>

<script>
import {uploadFile,getFileList} from '@/api/fileStorage'
export default {
  name: "FileStorage",
  data() {
    return {
      fileList:[{name:"ssx",password:"123"}]
    }
  },
  mounted() {
    this.queryFileList();
  },
  methods:{
    fileUpload(params){
      let formData = new FormData();
      formData.append("fileList", params.file);
      formData.append("userId", "1");
      uploadFile(formData).then((data)=>{

      })
    },
    submitUpload(){
      this.$refs.fileUpload.submit();
    },
    queryFileList(){
      getFileList("1").then((data)=>{
        this.fileList = data;
      })
    }
  }
}
</script>

<style scoped>

</style>
