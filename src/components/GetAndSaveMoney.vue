<template>
  <div class="GetAndSaveMoney">
    <!--  饼状图（带刻度的），每天的目标？赚的钱，花的钱，用户免注册，不需要真实名字等-->
    <el-row>
      <el-col>
        <el-button type="primary" @click="dialogFormVisible = true">添加支出</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">添加收入</el-button>
      </el-col>
    </el-row>
    <div id="moneyAnalyse" style="height: 500px;"></div>
    <!--  新建问题弹框-->
    <el-dialog title="添加支出" width="30%" :visible.sync="dialogFormVisible">
      <el-form :model="chargeList">
        <el-form-item label="支出类型" :label-width="formLabelWidth">
          <el-select v-model="spendTypeSelect" placeholder="请选择">
            <el-option
              v-for="item in spendType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支出金额" :label-width="formLabelWidth">
          <el-input-number v-model="spendAmount" :precision="2" :step="0.01"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSpend()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "GetAndSaveMoney",
  data(){
    return{
      spendType: [{
        value: '0',
        label: '默认'
      }, {
        value: '1',
        label: '衣'
      }, {
        value: '2',
        label: '食'
      }, {
        value: '3',
        label: '住'
      }, {
        value: '4',
        label: '行'
      }],
      spendTypeSelect: '0',
      spendAmount:0,
      formLabelWidth: '120px',
      chargeList:{

      },
      dialogFormVisible:false,
      option : {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
            ]
          }
        ]
      }
    }
  },
  mounted() {
    var chartDom = document.getElementById('moneyAnalyse');
    var myChart = this.$echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
  },
  methods:{
    addSpend(){

    }
  }
}
</script>

<style scoped>
</style>
