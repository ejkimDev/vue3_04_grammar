<template>
  <h1>{{ msg + '??' }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!'
    }
  },
  computed: {
    // 메소드처럼 만들었지만 계산된 데이터이다.
    // computed는 캐싱이라는 기능이 있기 때문에 한번 연산된 값은 다시 연산하지 않는다.
    // -> 반복 사용에 부담이 적다.
    reversedMessage() {
      return this.msg.split('').reverse().join('');
    }
  },
  methods: {
    reverseMessage() {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>
