<template>
  <div>
      <div>
        <p>input 元素：</p>
        <input v-model="message" placeholder="编辑我……">
      </div>
      <div>
          <input type="radio" id="runoob" value="Runoob" v-model="picked">
  <label for="runoob">Runoob</label>
  <br>
  <input type="radio" id="google" value="Google" v-model="picked">
  <label for="google">Google</label>
  <br>
  <span>选中值为: {{ picked }}</span>
      </div>
      <br>
      <div>
          <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
  <label for="runoob">Runoob</label>
  <input type="checkbox" id="google" value="Google" v-model="checkedNames">
  <label for="google">Google</label>
  <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
  <label for="taobao">taobao</label>
  <br>
  <span>选择的值为: {{ checkedNames }}</span>
      </div>
      <br>
      <div>
          <select v-model="selected" name="fruit">
    <option value="">选择一个网站</option>
    <option value="www.runoob.com">Runoob</option>
    <option value="www.google.com">Google</option>
  </select>
 
  <div id="output">
      选择的网站是: {{selected}}
     
  </div>
      </div>
      <div>
          {{title | capitalize}}
           
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          picked:'',
          checkedNames: [],
          selected:"",
          title: 'bestmind',
      }
  },
  filters: {
        capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
        }
  }
}
</script>
<style>

</style>

