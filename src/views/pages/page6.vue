<template>
    <div>
        <input v-on:keyup.space="submit">
    </div>
</template>
<script>
export default {
  methods:{
      submit: function(){
          alert('enter!');
      }
  }
}
</script>
<style scoped>

</style>

