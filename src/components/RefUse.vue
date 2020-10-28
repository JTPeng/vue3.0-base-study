<template>
  <div class="hello">
    {{ count }}
    <a-button type="primary" @click="add">
      Primary
    </a-button>
    <Button type="danger">
      danger
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'RefUse',
  components: { Button },
  props: {
    msg: String
  },
  // ref定义基本数据类型。vue能检测到其变化,进行重新渲染。html中需要使用则应该在setup函数中将对应的字段返回
  setup() {
    const count = ref<number>(0)
    function add() {
      count.value += 1
    }
    return {
      count,
      add
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
