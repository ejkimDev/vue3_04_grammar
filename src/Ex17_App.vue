<template>
  <button @click="message = 'Good?'">Click!</button>
  <h1>App : {{ message }}</h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Ex17_Parent'
import { computed } from 'vue'    

export default {
  components: {
    Parent
  },
  data() {
    return { 
      message: 'Hello world!'
    }
  },
  provide() {
    return {
      // msg: this.message       // provide를 사용할 땐, 반응성을 제공하지 않는다.
      /* msg: computed(() => {   // -> computed 콜백 함수를 사용하여 계산된 데이터 반환해 반응성 유지
        return this.message;
      }) 
      하단처럼 생략가능 */
      msg: computed(() => this.message ) 

    }
  }
}
</script>
