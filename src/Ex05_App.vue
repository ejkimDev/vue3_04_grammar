<template>
  <!-- 2개의 객체 데이터를 style로 연결하려면 배열 구문 사용 -->
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello?!
    </h1>
</template>

<script>
export default {
  data() {
    return {
      fontStyle: {
        color: 'orange',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  methods: {
    changeStyle() {
      this.fontStyle.color = 'red';
      this.fontStyle.fontSize = '50px';
    }
  }
}
</script>
