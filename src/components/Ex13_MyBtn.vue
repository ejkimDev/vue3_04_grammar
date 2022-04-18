<template>
    <!-- :class="{large: large}"   속성과 값의 데이터가 같으면 large로 생략 가능 -->
  <div 
    :class="{ large }"
    :style="{ backgroundColor: color }"
    class="btn"> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  /*
  * props : 컴포넌트가 실행될 때, 속성처럼 내용을 받아줌
  */
  props: {
    color: {
      type: String,
      default: 'gray'
    },
    large: {
      type: Boolean,
      default: false
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