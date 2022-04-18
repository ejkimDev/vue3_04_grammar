<template>
  <MyBtn>
    <template v-slot:text><span>Banana</span> </template>
    <template #icon><span>(B)</span> </template>
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/Ex16_MyBtn'

export default {
  components: {
    MyBtn
  }
}
</script>