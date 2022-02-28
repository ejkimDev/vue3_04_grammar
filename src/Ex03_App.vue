<template>
  <button @click="add">ADD</button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter : 값을 얻어내거나 지정하는 용도로 사용할 수 있다.
      msg: 'Hello Computed!'
    }
  },
  // computed : 계산된 데이터는 값을 얻어내는 용도로만 사용 -> Getter
  computed: {
    /* Getter
    reversedMessage() {
      return this.msg.split('').reverse().join('');
    } */
    // Getter, Setter를 사용할 수도 있다.
    reversedMessage: {
      // 3. getter 실행 : this.msg.split('').reverse().join('');가 실행되어 출력
      get() {
        return this.msg.split('').reverse().join('');
      },
      // 2. setter 실행 : value에는 기존 reversedMessage에 !?가 추가된 값이 들어간다.
      set(value) {    
        this.msg = value;
      }
    }

  },
  methods: {
    add() {   // 1. add 함수 실행
      this.reversedMessage += '!?';
    }
  }
}
</script>
