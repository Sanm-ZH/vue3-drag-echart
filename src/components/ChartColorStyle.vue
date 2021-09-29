<template>
  <div v-for="(item, index) in colorList" :key="`colorList-${index}`" class="color-list">
    <el-color-picker v-model="item.color" size="small" :show-alpha='item.showalpha'></el-color-picker>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect, defineComponent } from 'vue'
import { singleLineColor, doubleLineColor, rowBarColor, columnBarColor, areaPieColor, circlePieColor } from '@/utils/dict.js'

export default defineComponent({
  props: {
    chartType: {
      type: String,
      required: true
    },
    choseType: {
      type: String,
      required: true
    }
  },
  emits: ['colorChange'],
  setup (props, { emit }) {
    const state = reactive({
      colorList: []
    })

    const handleColorsInit = (chartType, choseType) => {
      state.colorList = []
      if (chartType === 'line' && choseType === 'singleLine') {
        state.colorList = singleLineColor
      }
      if (chartType === 'line' && choseType === 'doubleLine') {
        state.colorList = doubleLineColor
      }
      if (chartType === 'bar' && choseType === 'rowBar') {
        state.colorList = rowBarColor
      }
      if (chartType === 'bar' && choseType === 'columnBar') {
        state.colorList = columnBarColor
      }
      if (chartType === 'pie' && choseType === 'areaPie') {
        state.colorList = areaPieColor
      }
      if (chartType === 'pie' && choseType === 'circlePie') {
        state.colorList = circlePieColor
      }
      emit('colorChange', state.colorList)
    }
    watchEffect(() => {
      handleColorsInit(props.chartType, props.choseType)
    })

    const handleColorsChange = () => {

    }

    return {
      ...toRefs(state),
      handleColorsChange
    }
  }
})
</script>

<style lang="scss" scoped>
.color-list {
  display: inline-block;
  margin-left: 10px;
}
.color-list:first-child {
  margin-left: 0;
}
</style>
