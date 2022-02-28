// App.vue 파일을 main.js에서 시작

import { createApp } from 'vue'   // 객체구조분해를 통해서 바로 createApp 가져옴
import App from './App'

// html에서 app이라는 id를 가지고 있는 요소에 vue.js 프로젝트를 연결
createApp(App).mount('#app')