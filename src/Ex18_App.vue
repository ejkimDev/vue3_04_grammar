<template>
  <Hello ref="hello" /> 
</template>

<script>
import Hello from '~/components/Ex18_Hello'

export default {
  components : {
    Hello
  },
  mounted() {   // 컴포넌트가 HTML 구조와 연결된 직후
    console.log(this.$refs.hello.$refs.good);
  }

}
</script>
