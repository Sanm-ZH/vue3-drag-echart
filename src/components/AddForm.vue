<template>
  <div class="form-cont">
    <el-form ref="formRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" size="small" align="left">
      <el-form-item label="图表类型：" prop="chartType" required>
        <el-select v-model="ruleForm.chartType" placeholder="请选择图表类型" class="width220" @change="handleChartTypeChange">
          <el-option v-for="item in chartTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <span class="form-desc">（示例图仅供参考）</span>
      </el-form-item>
      <el-form-item prop="choseType" v-if="chartTypeChilds.length" label-width="0">
        <div class="chart-type-cont">
          <img v-for="item in chartTypeChilds" :key="item.type" :src="item.imgSrc" :class="{ active: item.type === ruleForm.choseType }" @click="handleChoseChartTypeClick(item.type)" />
        </div>
      </el-form-item>
      <el-form-item label="图表名称：" prop="title" required>
        <el-input v-model="ruleForm.title" placeholder="请输入图表名称（10字以内）" clearable class="width220"></el-input>
      </el-form-item>
      <span class="form-subtitle">图表样式</span>
      <el-form-item label="图表配色：" required v-if="ruleForm.choseType" label-width="60">
        <ChartColorStyle :choseType="ruleForm.choseType" :chartType="ruleForm.chartType" @colorChange="handleColorChange" />
      </el-form-item>
      <el-row>
        <el-col :span="11">
          <el-form-item label="宽：" label-width="40" prop="width" required>
            <el-select v-model="ruleForm.width" placeholder="请选择图表卡片宽度">
              <el-option v-for="item in chartPWs" :key="item.value" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right;color: var(--el-text-color-secondary);font-size: 13px;">
                  {{ item.value }}
                </span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11">
          <el-form-item label="高：" label-width="40" prop="heigth" required>
            <el-select v-model="ruleForm.heigth" placeholder="请选择图表卡片高度">
              <el-option v-for="item in chartPHs" :key="item.value" :label="item.label" :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right;color: var(--el-text-color-secondary);font-size: 13px;">
                  {{ item.value }}
                </span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form-bottom">
      <el-button size="small" @click="handleCancelClick" class="width80">取消</el-button>
      <el-button type="primary" size="small" @click="handleConfirmClick" class="width80">确定</el-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, defineComponent } from 'vue'
import ChartColorStyle from './ChartColorStyle'
import { chartTypes, chartPWs, chartPHs } from '@/utils/dict.js'

export default defineComponent({
  components: {
    ChartColorStyle
  },
  setup (props, { emit }) {
    const state = reactive({
      chartTypes,
      chartPWs,
      chartPHs,
      ruleForm: {
        title: '',
        chartType: '',
        choseType: '',
        colorList: [],
        heigth: '',
        width: '',
        desc: ''
      },
      chartTypeChilds: []
    })

    const formRef = ref(null)
    const rules = {
      title: [
        {
          required: true,
          message: '图表名称不能为空',
          trigger: ['blur', 'change']
        },
        {
          min: 3,
          max: 10,
          message: '图表名称应该3个字到10个字',
          trigger: 'blur'
        }
      ],
      chartType: [
        {
          required: true,
          message: '图表类型不能为空',
          trigger: 'change'
        }
      ],
      choseType: [
        {
          required: true,
          message: '两种类型必选一种',
          trigger: 'change'
        }
      ],
      heigth: [
        {
          required: true,
          message: '图表卡片宽度不能为空',
          trigger: 'change'
        }
      ],
      width: [
        {
          required: true,
          message: '图表卡片高度不能为空',
          trigger: 'change'
        }
      ]
    }
    const handleChartTypeChange = type => {
      const temp = chartTypes.filter(item => item.value === type)
      state.ruleForm.choseType = ''
      state.ruleForm.colorList = []
      if (temp.length) {
        state.chartTypeChilds = temp[0].chartType
      } else {
        state.chartTypeChilds = []
      }
    }

    const handleChoseChartTypeClick = type => {
      state.ruleForm.choseType = type
    }

    const handleColorChange = colors => {
      state.colorList = colors
    }

    const handleConfirmClick = () => {
      formRef.value.validate(valid => {
        if (valid) {
          emit('parentListener', { type: 'confirm', msg: '确定' })
        } else {
          return false
        }
      })
    }

    const handleCancelClick = () => {
      emit('parentListener', { type: 'cancel', msg: '取消' })
    }
    return {
      ...toRefs(state),
      formRef,
      rules,
      handleChartTypeChange,
      handleChoseChartTypeClick,
      handleColorChange,
      handleConfirmClick,
      handleCancelClick
    }
  }
})
</script>

<style scoped lang="scss">
.form-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-desc {
  font-size: 14px;
  color: #b5b5b5;
}

.chart-type-cont img {
  width: 250px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
  border-radius: 4px;
  transition: all 0.5s;
}
.chart-type-cont img:hover {
  border-color: #409eff;
}
.active {
  border-color: #409eff !important;
}
.chart-type-cont img:last-child {
  margin-left: 10px;
}
</style>
