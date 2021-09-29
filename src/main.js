import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@/styles/common.scss'
// import { ElInput, ElButton, ElDialog, ElCard, ElForm, ElFormItem } from 'element-plus'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
// app.component(ElButton.name, ElButton)
// app.component(ElDialog.name, ElDialog)
// app.component(ElCard.name, ElCard)
// app.component(ElForm.name, ElForm)
// app.component(ElFormItem.name, ElFormItem)
// app.component(ElInput.name, ElInput)

app.mount('#app')
