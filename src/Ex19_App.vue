<template>
  <div @click="increase">
    {{ count }}             <!-- 템플릿에선 value 속성 안붙여도 됨 -->
  </div>
</template>

<script>
import { ref } from 'vue'   // 2. 반응성을 가지도록 vue.js에서 제공하는 ref 사용

export default {
  setup() {                 // 1. setup 메소드를 통해 컴포지션 API 활용
    let count = ref(0);     // 3. ref 함수의 인수로 초기화할 값 지정 -> count에 반응성을 가지는 객체 데이터 반환
    function increase() {
      count.value += 1;     // 4. value 속성을 통해 데이터처럼 숫자 증가시킴
    }

    return {
      count,                // 5. 반응성을 가지는 count 반환
      increase
    }
  }
}
</script>
