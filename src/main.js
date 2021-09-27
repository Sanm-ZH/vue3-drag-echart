import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@/styles/common.scss'
import { ElButton, ElDialog, ElCard } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.component(ElButton.name, ElButton)
app.component(ElDialog.name, ElDialog)
app.component(ElCard.name, ElCard)

app.mount('#app')
