<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }}
  </h1>
</template>

<script>
// mounted -> onMounted
// onCreated는 존재하지 않다 => setup()에서 하면 되기 떄문에
import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup() {   // 컴포넌트가 생성된 직후 동작 -> created 메소드와 동일한 효과
    /* count와 관련된 부분 */
    const count = ref(0);
    const doubleCount = computed(() => {
      // count를 데이터로 쓰려면 value 속성 사용
      return count.value * 2;
    });
    function increase(){
      count.value += 1;
    }

    /* message와 관련된 부분 */
    const message = ref('Hello world!');
    const reversedMessage = computed(() => {
      // message를 데이터로 쓰려면 value 속성 사용
      return this.message.value.split('').reverse().join('');
    });
    watch(message, newValue => {  // 인수: 감시하고자 하는 데이터, 변경된 값
      console.log(newValue);
    })
    function changeMessage(){
      message.value = 'Good?!';
    }
    console.log(message.value);

    onMounted(() => {
      console.log(count.value);
    })

    return {
      /*
      count: count,
      message: message  속성과 값이 같으면 생략 가능
      */
      count,
      doubleCount,
      increase,
      message,
      reversedMessage,
      changeMessage
    }
  }
}
</script>