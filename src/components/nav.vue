<template>
<div>
  <div><router-link to="/page8">Go to page8</router-link></div>
  <div><router-link to="/page9">Go to page9</router-link></div>
  <button @click="page8">点击我去page8</button>
  <button @click="page9">点击我去page9</button>
</div>
</template>
<script>
export default {
  methods:{
      page8: function(){
          this.$router.push({ path: '/page8' })
      },
       page9: function(){
          this.$router.push({ path: '/page9' })
      }
  }
}
</script>
<style scoped>

</style>