<template>
  <div>
    Child: {{ msg }}
  </div>
</template>

<script>
export default {
  inject: ['msg']   // msg는 데이터로 취급
}
</script>
