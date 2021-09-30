<template>
  <div class="linesimple">
    <draggable v-model="getParentInfo" item-key="sort" @end="moveEnd" class="moveBox">
      <template #item="{element}">
        <div class='chartmain' :class="element.chartClass">
          <div class="chartTit">
            <p>{{ element.chartTit }}</p>
            <i class="el-icon-delete" :class="[disabled ? 'offDel':'onDel']"></i>
            <i class="el-icon-edit" :class="[disabled ? 'offDel':'onDel']"></i>
          </div>
          <div class="charShow"></div>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { lineChart, pieChart, barChart } from '../utils/chartView.js'
import { getchartlist } from '@/mock/action.js'

export default {
  data () {
    return {
      getParentInfo: [], // 父组件传来的数据
      sortArr: [], // 隐性排序移动顺序
      addChartInfo: false, // 数据发生改变的flag
      disabled: true, // 默认不可移动
      lineChartArr: [], // 折线图arr
      pieChartArr: [], // 饼图arr
      barChartArr: [], // 柱状图arr
      editDialog: false, // 编辑弹窗
      list: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ]
    }
  },
  components: {
    draggable
  },
  watch: {
    addEcharts: { // 监听添加的数据
      handler (newValue) {
        console.log(newValue)
        this.addChartInfo = true
        for (let i = 0; i < newValue.length; i++) {
          this.sortArr.push(newValue[i])
        }
        this.chartView()
      },
      deep: true
    }
  },
  methods: {
    async getFirCharInfo () {
      const result = await getchartlist()
      if (result.success) {
        for (var i = 0; i < result.data.length; i++) {
          this.getParentInfo.push(result.data[i])
          this.sortArr.push(result.data[i])
          if (result.data[i].chartType === 'line') {
            this.lineChartArr.push(result.data[i])
          }
          if (result.data[i].chartType === 'pie') {
            this.pieChartArr.push(result.data[i])
          }
          if (result.data[i].chartType === 'bar') {
            this.barChartArr.push(result.data[i])
          }
        }
        this.$nextTick(() => {
          this.chartView()
        })
      }
    },
    editTitleHandle (item, index) {
      console.log('修改名称')
    },
    removeChartHandle (index) {
      console.log('删除图表')
    },
    moveEnd () {
      console.log('移动完成')
    },
    chartView () {
      lineChart(this.lineChartArr)
      pieChart(this.pieChartArr)
      barChart(this.barChartArr)
    },
    parentInfo (drag) { // 父组件传参控制是否可以移动
      this.disabled = drag
      if (drag) {
        console.log(this.sortArr)
      }
    }
  },
  mounted () {
    this.getFirCharInfo()
  }
}
</script>
<style lang="scss">
.chartmain {
  position: relative;
  display: inline-block;
  margin-bottom: 1vh;
  border-radius: 2px 2px 2px 2px;
  box-shadow: 1px 2px 5px #ccc;
  border: 1px solid #ddd;
  min-height: 29vh;
  width: 24vw;
  margin-right: 0.5vw;
  // padding-top:4vh;
}
.charShow {
  height: calc(100% - 4vh);
  width: 100%;
}
.chartTit {
  top: 0;
  width: 100%;
  height: 4vh;
  border-bottom: 1px solid #e7e7e7;
  p {
    display: inline-block;
    margin-top: 0.5vh;
    margin-left: 1vw;
    font-size: 2.4vh;
    color: #222222;
    font-family: FZZZHONGJW--GB1-0;
  }
  i {
    float: right;
    margin-right: 1vw;
    margin-top: 1vh;
    cursor: pointer;
  }
}
.offDel {
  display: none !important;
}
</style>
