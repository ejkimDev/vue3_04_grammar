<template>
  <button @click="handler('hi')"> 
    Click 1
  </button>
  <button @click="handler2('what', $event)">  <!-- 인수, 이벤트 객체 둘다 필요할 때 -->
    Click 2
  </button>
  <button @click="handlerA(), handlerB()"> <!-- 하나의 이벤트에 여러개의 메소드를 사용할 수 있다. -->
    Click me!
  </button>
</template>

<script>
export default {
  methods: {
    handler(msg) {    // 메소드에 인수를 넣어주면 넣어진 매게변수로 받아진다.
      console.log(msg);
    },
    handler2(msg, event){
      console.log(msg);
      console.log(event);
    },
    handlerA() {
      console.log('A');
    },
    handlerB() {
      console.log('B');
    }
  }
}
</script>