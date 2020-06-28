<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
       返回
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这部分还没做出来呢@。@`,
  `不好意思，大哥。还没做呢。`,
  `天津市人才落户联系我 wx:junnanren456`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
