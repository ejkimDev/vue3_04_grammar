<template>
  <button @click="handler">
    Click me!
  </button>
  <ul>
    <li
      v-for="fruit in newFruits"
      :key="fruit.id">
      {{ fruit.id }} - {{ fruit.name }}
    </li>
    <br/>
    <!-- 객체구조분해하여 id, name 직접적으로 사용 가능 -->
    <li
      v-for="{ id, name } in newFruits"
      :key="id">
      {{ id }} - {{ name }}
    </li>
  </ul>
</template>

<script>
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map(fruit => ({    // 객체 데이터 반환
          /* shortid.generate() 
          : 간단한 id를 생성해주는 메서드
          , 고유한 형태의 id를 만들기 위해 사용 
          */
          id: shortid.generate(),
          name: fruit
      }))
    }
  },
  methods: {
    handler() {
      this.fruits.push('orange');
    }
  }
}
</script>
