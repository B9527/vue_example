<template>
<div>
    <div>
        <p>原始字符串: {{ message }}</p>
        <p>计算后反转字符串: {{ reversedMessage }}</p>
        <p>方法反转：{{reversedMessage2()}}</p>
        <button @click="setSite">set按钮</button>
        <p>{{site}}</p>
    </div>
</div>
  
</template>
<script>
export default {
    data(){
        return {
            message: "Hello World!",
            name: "name1",
            url: "url1"
        }
    },
     computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        },
        site:{
            get: function () {
                return this.name + ' ' + this.url
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.name = names[0]
                this.url = names[names.length - 1]
            }
        }

  },
  methods: {
      setSite: function(){
          this.site = "百度 wwww.baidu.com";
      },
      reversedMessage2: function () {
        return this.message.split('').reverse().join('')
  }
  }
}
</script>
<style scoped>

</style>
