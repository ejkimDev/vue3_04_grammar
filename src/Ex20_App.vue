<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello world!'
    }
  },
  computed: {
    doubleCount(){
      return this.count * 2;
    },
    reversedMessage(){
      return this.message.split('').reverse().join('');
    }
  },
  watch: {
    message(newVal) {   // newVal : 변경된 message 값
      console.log(this.message, newVal);
    }
  },
  created() {   // 컴포넌트가 생성된 직후
    console.log(this.message);
  },
  mounted() {   // HTML가 컴포넌트가 연결된 직후
    console.log(this.count);
  },
  methods: {
    increase() {
      this.count += 1;
    },
    changeMessage() {
      this.message = 'Good?!';
    }
  }
}
</script>
