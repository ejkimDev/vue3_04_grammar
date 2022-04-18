<template>
  <!-- props : 컴포넌트에 html에 속성이 붙어있을 때, 컴포넌트 내부에서 어떻게 처리할지 정의 -->
  <MyBtn>Banana</MyBtn> <!-- 컴포넌트 사이에 Content를 받아줄 수 있는 내용을 MyBtn에 정의해야한다. -->
  <MyBtn color="royalblue" >     <!-- type이 String이기 때문에 문자 데이터만 가능 -->
    <span style="color: red">Banana</span>  <!-- 태그 사이의 모든 내용을 slot이라는 태그로 대체할 수 있다. -->
  </MyBtn> 
  <MyBtn color="#000" >Apple</MyBtn> 
  <MyBtn :color="color" >Apple</MyBtn>    <!-- color 변수는 문자이기 때문에 데이터처럼 읽힐 수 있도록 v-bind(:) 사용 --> 
  <MyBtn large >Cherry</MyBtn> 
  <MyBtn large color="royalblue">Cherry</MyBtn>  <!-- props를 여러개 사용할 수 있다.  -->
</template>

<script>
import MyBtn from '~/components/Ex13_MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      color: '#000'
    }
  }
}
</script>