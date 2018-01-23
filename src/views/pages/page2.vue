<template>
<div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
        {{Num}}
      Not A/B/C
    </div>
</div>  
</template>
<script>
export default {
  data(){
      return {
          type: "D",
           Num:Math.random()
      }
  }
}
</script>
<style scoped>

</style>
