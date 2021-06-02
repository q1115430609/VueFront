<template>
<div class="FileStorage">
  <el-row class="textRight20">
    <el-button type="primary" @click="queryFileList()">查询</el-button>
    <el-button type="primary" @click="dialogVisible = true;">上传</el-button>
  </el-row>
  <el-row>
    <el-table
      :data="fileList"
      style="width: 80%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="fileName"
        label="文件名">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="上传人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="上传时间"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, fileList)"
            type="text"
            size="small">
            删除
          </el-button>
          <el-button
            @click.native.prevent="downloadRow(scope.$index, fileList)"
            type="text"
            size="small">
            下载
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
  <!-- 上传文件弹窗 -->
  <el-dialog
    title="上传文件"
    :visible.sync="dialogVisible"
    width="30%">
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
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>

</div>
</template>

<script>
import {uploadFile,getFileList,downloadFile} from '@/api/fileStorage'
export default {
  name: "FileStorage",
  data() {
    return {
      fileList:[{name:" ",password:" "}],
      dialogVisible:false
    }
  },
  mounted() {
    if(this.$store.state.loginVal.userId == ""){
      this.$message("请登录使用此功能！");
      return ;
    }
    this.queryFileList();
  },
  methods:{
    fileUpload(params){
      let fileList = params.file;
      if(fileList.length == 0){
        this.$message("请选择文件！");
        return ;
      }
      let formData = new FormData();
      formData.append("fileList", fileList);
      formData.append("userId", this.$store.state.loginVal.userId);
      uploadFile(formData).then((data)=>{
          this.$message(data.data.result)
      })
    },
    submitUpload(){
      this.$refs.fileUpload.submit();
    },
    queryFileList(){
      let userId = this.$store.state.loginVal.userId;
      let params = {
        userId:userId
      }
      getFileList(params).then((data)=>{
        this.fileList = data.data;
      })
    },
    deleteRow(index,data){
      console.log("dsasad",index,data)
    },
    downloadRow(index,data){
      let params = {
        id:data[index].id
      }
      window.open('api/fileStorage/downloadFile?id='+data[index].id,'_blank')
    }
  }
}
</script>

<style scoped>

</style>
