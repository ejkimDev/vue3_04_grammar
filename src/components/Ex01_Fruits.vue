<template>
  <section v-if="hasFruit">  <!-- computed 옵션에서 계산된 데이터인 hasFruit 사용 -->
    <h1>Fruits</h1>
    <ul>
      <li 
        v-for="fruit in fruits" 
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <section>
    <h1>Reverse Fruits</h1>
    <ul>
      <!-- computed 옵션에서 계산된 데이터인 reverseFruits 사용 -->
      <li 
        v-for="fruit in reverseFruits" 
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        'Apple', 'Banana', 'Cherry'
      ]
    }
  },
  /* computed : 계산된 데이터를 사용하는 옵션 */
  computed: {  
    hasFruit(){   // hasFruit라는 계산된 데이터
      return this.fruits.length > 0;    // true
    },
    reverseFruits() {   // reverseFruits라는 계산된 데이터
      return this.fruits.map(fruit => {
        // 'Apple' => ['A','p','p','l','e'] => ['e','l','p','p','A'] => 'elppA'
        return fruit.split('').reverse().join('');
      })
    }
  }
}
</script>
