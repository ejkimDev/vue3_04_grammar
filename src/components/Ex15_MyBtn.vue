<template>
  <div class="btn"> 
    <slot></slot>
  </div>
  <!-- h1 태그를 클릭하면 $emit을 통해서 부모 요소에 연결되어 있는 @click 이벤트 실행 -->
  <h1 @dblclick="$emit('searchkim', $event)">
    ABC
  </h1>
  <input
    type="text"
    v-model="msg" />    <!-- 양방향 데이터 바인딩 -->
</template>

<script>
export default {
  emits: [  
    'searchkim',   // 부모 요소의 searchkim 이벤트를 컴포넌트 내부에서 사용할 것이라고 정의
    'changeMsg'    // changeMsg 이벤트를 사용하겠다 명시
  ],
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg() {     // msg 감시
      // input 요소에 데이터를 입력할 때마다 this.$emit을 통해서 this.msg 인수와 함께 changeMsg 실행
      this.$emit('changeMsg', this.msg);    
    }
  }
}
</script>


<style scoped lang="scss">
 .btn {
   display: inline-block;
   margin: 4px;
   padding: 6px 12px;
   border-radius: 4px;
   background-color: gray;
   color: white;
   cursor: pointer;
   &.large {
   font-size: 20px;
   padding: 10px 20px;
  }
 }
</style>