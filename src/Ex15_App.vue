<template>
  <!--  html의 속성을 작성할때는 대시 케이스 사용(change-msg) -->
  <MyBtn 
  @searchkim="log" 
  @change-msg="logMsg">
    Banana
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/Ex15_MyBtn'

export default {
  components: {
    MyBtn
  },
  methods: {
    log(event) {
      console.log('Click!');
      console.log(event);
    },
    logMsg(msg) {
      console.log(msg);
    }
  }
}
</script>