<template>
  <div>
      <div id="counter-event-example">
     <button v-on:click="incrementHandler">{{ total }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          total:0,
      }
  },
  methods: {
    incrementHandler: function () {
      this.total += 1
      this.$emit('increment')
    }
  },
}
</script>
<style scoped>

</style>


