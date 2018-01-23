<template>
<div>
  <p>{{message}}</p>
  <p v-html="message"></p>
  <div v-bind:class="{'class1': class1}">
    directiva v-bind:class
  </div>
  {{ message.split('').reverse().join('') }}
   <button v-on:click="show">show</button>
  </div>
</template>
<script>
export default {
  data(){
      return{
          message:"<h1>Hello World!</h1>",
          class1: true,
      }
  },
  methods:{
    show: function(){
      alert('ok');
    }
  }
}
</script>
<style scoped>
.class1{
  background-color: brown;
}
</style>

