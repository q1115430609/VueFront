<template>
<div class="FileStorage">
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
</div>
</template>

<script>
import {uploadFile} from '@/api/fileStorage'
export default {
  name: "FileStorage",
  data() {
    return {
    }
  },methods:{
    fileUpload(params){
      let formData = new FormData();
      formData.append("fileList", params.file);
      formData.append("userId", "1");
      uploadFile(formData).then((data)=>{

      })
    },
    submitUpload(){
      this.$refs.fileUpload.submit();
    }
  }
}
</script>

<style scoped>

</style>
