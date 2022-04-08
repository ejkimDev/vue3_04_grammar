<template>
  <input 
    type="text" 
    @keydown.ctrl.shift.a="handler" />  <!-- ctrl 키 + shift 키 + a 누르면 handler 메서드 실행됨 -->
</template>

<script>
export default {
  methods: {
    handler(event) {
      console.log('Enter!');
    }
  }
}
</script>


