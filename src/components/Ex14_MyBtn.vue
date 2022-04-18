<template>
  <div class="btn"> 
    <slot></slot>
  </div>
  <h1 :class="$attrs.class" :style="$attrs.style">apple</h1>
  <h1 v-bind="$attrs">cherry</h1>   <!-- 하나의 요소에 해당하는 내용을 모두 다 적용 -->
</template>

<script>
export default {
  inheritAttrs: false,   // 속성의 상속을 지정해주는 옵션
  created() {
    console.log(this.$attrs);   // 컴포넌트의 속성을 출력
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