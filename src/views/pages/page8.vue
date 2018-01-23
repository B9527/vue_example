<template>
<div>
  <div>
      <numButton></numButton>
       <numButton></numButton>
        <numButton></numButton>
  </div>
  <Nav></Nav>
</div>
</template>
<script>
import numButton from '@/components/numButton'
import Nav from '@/components/nav'
export default {
   components: {
        numButton, Nav
    },
    data(){
        return{

        }
    },
}
</script>
<style scoped>

</style>

