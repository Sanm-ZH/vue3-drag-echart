<template>
  <div class="form-cont">
    <el-form ref="formRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" size="small" align="left">
      <el-form-item label="图表类型：" prop="chartType" required>
        <el-select v-model="ruleForm.chartType" placeholder="请选择图表类型" class="width220">
          <el-option v-for="item of chartTypes" :key="item.value" :label="item.label" value="item.value"></el-option>
        </el-select>
        <span class="form-desc">（示例图仅供参考）</span>
      </el-form-item>
      <el-form-item label="图表名称：" prop="title" required>
        <el-input v-model="ruleForm.title" placeholder="请输入图表名称（10字以内）" class="width220"></el-input>
      </el-form-item>
      <span class="form-subtitle">图表样式</span>
      <el-row>
        <el-col :span="11">
          <el-form-item label="宽：" label-width="40" prop="width" required>
            <el-select v-model="ruleForm.width" placeholder="请选择图表卡片宽度">
              <el-option v-for="item of chartPWs" :key="item.value" :label="item.label" :value="item.value">
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
              <el-option v-for="item of chartPHs" :key="item.value" :label="item.label" :value="item.value">
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
import { chartTypes, chartPWs, chartPHs } from '@/utils/dict.js'
console.log(chartTypes)

export default defineComponent({
  props: {

  },
  setup (props, { emit }) {
    const state = reactive({
      chartTypes,
      chartPWs,
      chartPHs,
      ruleForm: {
        title: '',
        chartType: '',
        heigth: '',
        width: '',
        desc: ''
      }
    })

    const formRef = ref(null)
    const rules = {
      title: [
        {
          required: true,
          message: '图表名称不能为空',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: '图表名称应该3个字到10个字',
          trigger: 'blur'
        }
      ]
    }

    const handleConfirmClick = () => {

    }

    const handleCancelClick = () => {
      emit('parentListener', { type: 'cancel', msg: '取消' })
    }
    return {
      ...toRefs(state),
      formRef,
      rules,
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
</style>
