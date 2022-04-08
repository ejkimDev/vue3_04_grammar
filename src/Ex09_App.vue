<template>
  <div 
    class="parent"
    @wheel.passive="handler">   <!-- 마우스 휠으로 스크롤 이동할 때의 이벤트 -->
    <div class="child"></div> 
  </div>
</template>

<script>
export default {
  methods: {
    handler(event) {
      /* 
      휠 이동할 때마다 for문 안의 명령이 10000번 동작
      -> 과부하로 인한 버벅임 발생 
      => .passive를 통해 로직과 스크롤을 독립시켜줌
      */ 
      for (let i = 0; i < 10000; i += 1) {
        console.log(event);
      }
      console.log(event);
    }
  }
}
</script>

<style scoped lang="scss">
  .parent {
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    .child {
      width: 100px;
      height: 2000px;
      background-color: orange;
    }
  }
</style>