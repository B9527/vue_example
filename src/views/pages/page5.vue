<template>
  <div>

    <div v-bind:style="styleObject">Best Mind</div>
    <button @click="Change1">Change Style1</button>

    <div>
        <div v-bind:class="classObject">class style</div>
        <button @click="Change2">Change2</button>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            styleObject: {
                color: 'green',
                fontSize: '30px',
                background:"red"
                },
             classObject: {
                active: true,
                'text-danger': true
                }
        }
    },
    methods:{
        Change1: function(){
            this.styleObject.color="black"
            this.styleObject.background="white"
        },
        Change2: function(){
            this.classObject.active=false;
        }
    }
}
</script>
<style scoped>
.active {
	width: 100px;
	height: 100px;
	background: green;
}
.text-danger {
	background: red;
}

</style>
