<template>
  <transition name="title-fade">
    <div class="title-view" v-if="titleShow">{{ msg }}</div>
    <div class="cont-view" v-else>
      <div class="head-cont">
        <div class="head-left font-blod">
          {{ msg }}
        </div>
        <div class="head-cen"></div>
        <div class="head-right">
          <el-button type="primary" size="small" :disabled="editBStatus" icon="el-icon-edit" @click="handleEditClick">编辑</el-button>
          <el-button type="primary" size="small" :disabled="confirmBStatus" icon="el-icon-check" @click="handleConfirmClick">确定</el-button>
          <el-button type="primary" size="small" :disabled="addBStatus" icon="el-icon-plus" @click="handleAddClick">增加</el-button>
        </div>
      </div>
    </div>
  </transition>
  <el-dialog v-model="addDialogFormVisible" title="新增" center :show-close=false :close-on-click-modal=false>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="small" @click="addDialogFormVisible = false" class="width80">取消</el-button>
        <el-button type="primary" size="small" @click="addDialogFormVisible = false" class="width80">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref, toRefs, reactive, defineComponent } from 'vue'
export default defineComponent({
  props: {
    msg: String
  },
  setup () {
    const titleShow = ref(true)
    setTimeout(() => {
      titleShow.value = false
    }, 2300)

    const state = reactive({
      editBStatus: false,
      confirmBStatus: true,
      addBStatus: false,
      addDialogFormVisible: false
    })

    const handleEditClick = () => {
      state.editBStatus = true
      state.confirmBStatus = false
      state.addBStatus = true
    }
    const handleConfirmClick = () => {
      state.editBStatus = false
      state.confirmBStatus = true
      state.addBStatus = false
    }

    const handleAddClick = () => {
      addDialogInit()
    }
    const addDialogInit = () => {
      state.addDialogFormVisible = true
    }

    return {
      titleShow,
      ...toRefs(state),
      handleEditClick,
      handleConfirmClick,
      handleAddClick
    }
  }
})
</script>

<style scoped lang="scss">
// title动画
.title-fade-enter-active {
  transition: all 0.3s ease-out;
}
.title-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.title-fade-enter-from,
.title-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.title-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.head-cont {
  height: 40px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}
</style>
