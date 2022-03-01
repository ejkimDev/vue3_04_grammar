<template>
  <h1 
    @click="changeMessage">
    {{ msg }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello?'
    }
  },
  // msg가 바뀌면 계산된 데이터도 바뀐다.
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('');
    }
  },
  // 데이터의 변경사항을 감시하는 용도
  // 계산된 데이터도 감시할 수 있음
  watch: {
    // msg: function() { 와 같음
    msg(newVal) {   // msg라는 데이터는 감시되고 있는 상황, newVal은 변경된 값
      console.log('msg', this.msg);   // 감시되는 내용
      console.log(newVal);    // this.msg대신에 newVal을 사용할 수 있음
    },
    reversedMessage() {
      console.log('reversedMessage', this.reversedMessage);
    }
  },
  methods: {
    changeMessage() {
      this.msg = 'Good!'
    }
  }
}
</script>
